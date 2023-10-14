import React from 'react';
import Link from 'next/link';
import { Button } from "./button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-2 bg-slate-900 text-purple-900">
      <div className="flex items-center space-x-2">
        <img width="200" height="200" src="/asset/bullFinance.png" alt="Description du logo" />
        <div className="separator h-4 bg-indigo-900 w-0.5"></div>
        <ul className="menu-list flex space-x-4">
          <li>
            <Link href="/trade" className="text-blue-500 hover:underline">
              Trade
            </Link>
          </li>
          <li>
            <Link href="/earn" className="text-blue-500 hover:underline">
              Earn
            </Link>
          </li>
          <li>
            <Link href="/docs" className="text-blue-500 hover:underline">
              Docs
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Button variant="secondary" className="h-8 bg-gradient-to-r from-sky-500 to-indigo-500 text-white mr-5">Connect Your Wallet</Button>
      </div>
    </nav>
  );
}
