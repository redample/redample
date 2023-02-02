import {getSession, withPageAuthRequired} from "@auth0/nextjs-auth0";
import {db, user_role} from "@redample/database";
import isValidAccess from "@/helpers/node/isValidAccess";
import {NextApiRequest} from "next";


const withAuthorizedPageAccess = (config : any, requiredAccess : user_role) => {
    return  withPageAuthRequired({
        getServerSideProps : async (context : any) => {
            // access the user session
            const session = await getSession(context.req as NextApiRequest, context.res);

            let redirectNextJsPath = {};

            try {

                if(!session){
                    redirectNextJsPath = { redirect: { destination: '/403', permanent: false }};
                }
                else{

                    const user = await db.user.findFirst({
                        where: {
                            email: session.user.email
                        }
                    });


                    if (!user){
                        redirectNextJsPath = { redirect: { destination: '/403', permanent: false }};

                    }
                    else if(!isValidAccess(user.role,requiredAccess)){
                        redirectNextJsPath = { redirect: { destination: '/403', permanent: false }};
                    }
                }

            }
            catch (e) {
                console.log(e);
                redirectNextJsPath = { redirect: { destination: '/500', permanent: false }};
            }

            const resp = await config?.getServerSideProps?.(context) || {};
            return {
                ...resp,
                ...redirectNextJsPath,
            }
        },
        returnTo: config?.returnTo
    });
}

export default withAuthorizedPageAccess;
