import React from 'react'
import { Menu } from '@headlessui/react'

export default function ResponsiveNavlink({ href, children }) {
    return (
        <Menu.Item>
            <a href={href} className="px-4 py-2 text-sm text-gray-500 hover:text-white block">
                {children}
            </a>
        </Menu.Item>
    )
}
