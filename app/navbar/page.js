"use client"
import React from 'react'
import Link from 'next/link'
import Styles from "./navbar.module.css"
import { signOut, useSession } from "next-auth/react";

function Navbar() {
    const { data: session } = useSession();

    return (
        <nav className={Styles.nav}>
            <ul className={Styles.list}>
               <Link href="/"><li className={Styles.item}>Home</li></Link> 
               <li className={Styles.item}>CoinListing</li>
               <Link href="/tokenSwap">
          <li className={Styles.item}>Token Swap</li>
        </Link>
                <li className={Styles.item}>Crypto-Fiat </li>
                <li className={Styles.item}>Wallet</li>
            </ul>
            {!session ? (
                <>
                <Link href="/signup">
           <button className={Styles.btn}>Sign Up</button>
           </Link>
           <Link href="/login">
           <button className={Styles.btn}>Login</button>
           </Link> 
                </>
           ) : (
            <>
            <p className='text-white'>
                {session.user?.email}
            </p>
            
            <li>
              <button
                onClick={() => {
                  signOut();
                }}
                className="font-sans font-normal text-base text-white cursor-pointer bg-gradient-to-r from-teal-500 via-teal-300 to-teal-600 border-none rounded-md px-5 py-2"
              >
                Logout
              </button>
            </li>
          </>
        )}
        </nav>
    )
}

export default Navbar