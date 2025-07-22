import React, { useState } from 'react';
import {
  LayoutDashboard,
  Book,
  Newspaper,
  User,
  Share2,
  Home,
  Building2,
  Link,
  Settings,
  LogOut,
  ChevronDown,
  Menu,
  X,
  LucideSquareSplitHorizontal
} from 'lucide-react';

function Side_bar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = (
    <ul className="space-y-2 font-medium text-gray-900">
      <li>
        <a href="#" className="flex items-center p-2 rounded-lg hover:bg-blue-50 group">
          <LayoutDashboard className="w-5 h-5 text-gray-500 group-hover:text-gray-900" />
          <span className="ms-3">Dashboard</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center p-2 rounded-lg hover:bg-blue-50 group">
          <Book className="w-5 h-5 text-gray-500 group-hover:text-gray-900" />
          <span className="ms-3">REI Directory</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center p-2 rounded-lg hover:bg-blue-50 group">
          <Newspaper className="w-5 h-5 text-gray-500 group-hover:text-gray-900" />
          <span className="ms-3">Feed</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center p-2 rounded-lg hover:bg-blue-50 group">
          <User className="w-5 h-5 text-gray-500 group-hover:text-gray-900" />
          <span className="ms-3">Profile</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center p-2 rounded-lg hover:bg-blue-50 group">
          <Share2 className="w-5 h-5 text-gray-500 group-hover:text-gray-900" />
          <span className="ms-3">Networks</span>
          <ChevronDown className="w-3 h-3 ms-3" />
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center p-2 rounded-lg hover:bg-blue-50 group">
          <Home className="w-5 h-5 text-gray-500 group-hover:text-gray-900" />
          <span className="ms-3">Home Dispo</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center p-2 rounded-lg hover:bg-blue-50 group">
          <Building2 className="w-5 h-5 text-gray-500 group-hover:text-gray-900" />
          <span className="ms-3">Properties</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center p-2 rounded-lg hover:bg-blue-50 group">
          <Link className="w-5 h-5 text-gray-500 group-hover:text-gray-900" />
          <span className="ms-3">Link CRM</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center p-2 rounded-lg hover:bg-blue-50 group">
          <Settings className="w-5 h-5 text-gray-500 group-hover:text-gray-900" />
          <span className="ms-3">Settings</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center p-2 rounded-lg hover:bg-blue-50 group">
          <LogOut className="w-5 h-5 text-gray-500 group-hover:text-gray-900" />
          <span className="ms-3">Log Out</span>
        </a>
      </li>
    </ul>
  );

  return (
    <>
      {/* Mobile hamburger button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button onClick={() => setIsOpen(true)}>
          <Menu className="w-7 h-7 text-gray-800 mt-16" />
        </button>
      </div>

      {/* Desktop sidebar */}
      <aside
        className="w-64 max-h-screen flex-col bg-white fixed top-16 left-0 h-screen z-40 shadow-lg hidden md:flex"
        aria-label="Sidebar"
      >
        <div className="flex-1 overflow-y-auto px-3 py-4">
          {menuItems}
        </div>
        <div className="p-4 border-t border-gray-300 text-gray-400">
          <span className="text-sm">© 2023 Home Dispo. All Rights Reserved.</span>
        </div>
      </aside>

      {/* Mobile overlay backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black-30 bg-opacity-40 transition-opacity duration-300 ${isOpen ? 'block' : 'hidden'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile sidebar drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}
        aria-label="Sidebar"
      >
        <div className="p-4">
          <button onClick={() => setIsOpen(false)} className="mb-4 text-gray-600">
            <LucideSquareSplitHorizontal />
          </button>
          {menuItems}
        </div>
      </aside>
    </>
  );
}

export default Side_bar;
