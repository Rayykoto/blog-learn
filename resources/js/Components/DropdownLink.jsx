import { Menu } from '@headlessui/react'
import React from 'react'

export default function DropdownLink({ href, children }) {
    return (
        <Menu.Item>
            <a href={href} className="px-4 py-2 text-sm text-gray-500 hover:text-white block">
                {children}
            </a>
        </Menu.Item>

    )
}
