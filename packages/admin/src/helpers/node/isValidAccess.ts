import {user_role} from "@prisma/client";

function isValidAccess(access: user_role, requiredAccess: user_role, strictRoleRequirement = false) {

    if(strictRoleRequirement){
        return access === requiredAccess;
    }

    switch (requiredAccess) {
        case "admin":
            return access === "owner" || access === "admin";
        case "editor":
            return access === "owner" || access === "admin" || access === "editor";
        case "reviewer":
            return access === "owner" || access === "admin" || access === "editor" || access === "reviewer";
        case "viewer":
            return access === "owner" || access === "admin" || access === "editor" || access === "reviewer" || access === "viewer";
        default:
            return false;
    }

}

export default isValidAccess;