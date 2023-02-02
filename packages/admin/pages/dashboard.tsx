import { Fragment, useState } from 'react'

import {
    ChevronRightIcon,
} from '@heroicons/react/outline'

import clsx from "clsx";
import MainLayout from "@/components/MainLayout";


const stats = [
    { name: 'Posts', stat: '1,200', bgColorClass: 'bg-indigo-500' },
    { name: 'Comments', stat: '120', bgColorClass: 'bg-green-500' },
    { name: 'Members', stat: '12', bgColorClass: 'bg-yellow-500' },
    { name: 'Scheduled Jobs', stat: '1', bgColorClass: 'bg-red-500' },
]

const projects = [
    {
        id: 1,
        title: 'How to use search engine optimization to drive sales',
        team: 'Engineering',
        members: [
            {
                name: 'Dries Vincent',
                handle: 'driesvincent',
                imageUrl:
                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                name: 'Courtney Henry',
                handle: 'courtneyhenry',
                imageUrl:
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        ],
        totalMembers: 12,
        lastUpdated: 'March 17, 2020',
        pinned: true,
        bgColorClass: 'bg-pink-600',
    },
    {
        id: 2,
        title: 'Boost your conversion rate by 200%',
        team: 'Human Resources',
        members: [

            {
                name: 'Lindsay Walton',
                handle: 'lindsaywalton',
                imageUrl:
                    'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                name: 'Tom Cook',
                handle: 'tomcook',
                imageUrl:
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        ],
        totalMembers: 12,
        lastUpdated: 'March 17, 2020',
        pinned: true,
        bgColorClass: 'bg-pink-600',
    },
    {
        id: 3,
        title: 'What to do when your sales are down',
        team: 'Customer Success',
        members: [
            {
                name: 'Dries Vincent',
                handle: 'driesvincent',
                imageUrl:
                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                name: 'Lindsay Walton',
                handle: 'lindsaywalton',
                imageUrl:
                    'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                name: 'Courtney Henry',
                handle: 'courtneyhenry',
                imageUrl:
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            }
        ],
        totalMembers: 12,
        lastUpdated: 'March 17, 2020',
        pinned: true,
        bgColorClass: 'bg-pink-600',
    },
    // More projects...
]

export default function Example() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <MainLayout>
            <main className="flex-1">
                {/* Page title & actions */}
                <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
                    <div className="min-w-0 flex-1">
                        <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">Home</h1>
                    </div>
                    <div className="mt-4 flex sm:mt-0 sm:ml-4">
                        {/*<button*/}
                        {/*    type="button"*/}
                        {/*    className="sm:order-0 order-1 ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:ml-0"*/}
                        {/*>*/}
                        {/*    Share*/}
                        {/*</button>*/}
                        <button
                            type="button"
                            className="order-0 inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:order-1 sm:ml-3"
                        >
                            Create Posts
                        </button>
                    </div>
                </div>
                {/* Pinned projects */}
                <div className="mt-6 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-sm font-medium text-gray-900">Insights</h2>
                    <ul role="list" className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
                        {stats.map((stat) => (
                            <li key={stat.name} className="relative col-span-1 flex rounded-md shadow-sm">
                                <div
                                    className={clsx(
                                        stat.bgColorClass,
                                        'flex-shrink-0 flex items-center justify-center w-4 text-white text-sm font-medium rounded-l-md'
                                    )}
                                />
                                <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
                                    <div className="flex-1 truncate px-4 py-2 text-sm">
                                        <a href="api#" className="font-medium text-gray-900 hover:text-gray-600">
                                            {stat.name}
                                        </a>
                                        <p className="text-gray-500">{stat.stat} Members</p>
                                    </div>

                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Projects list (only on smallest breakpoint) */}
                <div className="mt-10 sm:hidden">
                    <div className="px-4 sm:px-6">
                        <h2 className="text-sm font-medium text-gray-900">Posted blogs</h2>
                    </div>
                    <ul role="list" className="mt-3 divide-y divide-gray-100 border-t border-gray-200">
                        {projects.map((project) => (
                            <li key={project.id}>
                                <a href="api#" className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6">
                      <span className="flex items-center space-x-3 truncate">
                        <span
                            className={clsx(project.bgColorClass, 'w-2.5 h-2.5 flex-shrink-0 rounded-full')}
                            aria-hidden="true"
                        />
                        <span className="truncate text-sm font-medium leading-6">
                          {project.title} <span className="truncate font-normal text-gray-500">in {project.team}</span>
                        </span>
                      </span>
                                    <ChevronRightIcon
                                        className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Projects table (small breakpoint and up) */}
                <div className="mt-8 hidden sm:block">
                    <div className="inline-block min-w-full border-b border-gray-200 align-middle">
                        <table className="min-w-full">
                            <thead>
                            <tr className="border-t border-gray-200">
                                <th
                                    className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                                    scope="col"
                                >
                                    <span className="lg:pl-2">Posts</span>
                                </th>
                                <th
                                    className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                                    scope="col"
                                >
                                    Authors
                                </th>
                                <th
                                    className="hidden border-b border-gray-200 bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900 md:table-cell"
                                    scope="col"
                                >
                                    Last updated
                                </th>
                                <th
                                    className="border-b border-gray-200 bg-gray-50 py-3 pr-6 text-right text-sm font-semibold text-gray-900"
                                    scope="col"
                                />
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 bg-white">
                            {projects.map((project) => (
                                <tr key={project.id}>
                                    <td className="w-full max-w-0 whitespace-nowrap px-6 py-3 text-sm font-medium text-gray-900">
                                        <div className="flex items-center space-x-3 lg:pl-2">
                                            <div
                                                className={clsx(project.bgColorClass, 'flex-shrink-0 w-2.5 h-2.5 rounded-full')}
                                                aria-hidden="true"
                                            />
                                            <a href="api#" className="truncate hover:text-gray-600">
                              <span>
                                {project.title} <span className="font-normal text-gray-500">in {project.team}</span>
                              </span>
                                            </a>
                                        </div>
                                    </td>
                                    <td className="px-6 py-3 text-sm font-medium text-gray-500">
                                        <div className="flex items-center space-x-2">
                                            <div className="flex flex-shrink-0 -space-x-1">
                                                {project.members.map((member) => (
                                                    <img
                                                        key={member.handle}
                                                        className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                                                        src={member.imageUrl}
                                                        alt={member.name}
                                                    />
                                                ))}
                                            </div>
                                            {project.totalMembers > project.members.length ? (
                                                <span className="flex-shrink-0 text-xs font-medium leading-5">
                                +{project.totalMembers - project.members.length}
                              </span>
                                            ) : null}
                                        </div>
                                    </td>
                                    <td className="hidden whitespace-nowrap px-6 py-3 text-right text-sm text-gray-500 md:table-cell">
                                        {project.lastUpdated}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3 text-right text-sm font-medium">
                                        <a href="api#" className="text-indigo-600 hover:text-indigo-900">
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </MainLayout>
    )
}
