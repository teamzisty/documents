"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import sidebar from "@/styles/sidebar.module.css";

export default function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={sidebar.menuButton}
            >
                <div className={clsx(sidebar.hamburger, isOpen && sidebar.open)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>

            <nav className={clsx(sidebar.sidebar, isOpen && sidebar.open)}>
                <p style={{ marginTop: "0px" }}>👋 Welcome</p>
                <div className={clsx(sidebar["nav-item"], pathname === "/welcome" && sidebar["active"])}><a href="/welcome/">Welcome to Zisty</a></div>

                <p>📖 Zisty Accounts</p>
                <div className={clsx(sidebar["nav-item"], pathname === "/zisty-accounts" && sidebar["active"])}><a href="/zisty-accounts/">About</a></div>
                <div className={clsx(sidebar["nav-item"], pathname === "/zisty-accounts/basic-attention" && sidebar["active"])}><a href="/zisty-accounts/basic-attention">Basic Attention</a></div>
                <div className={clsx(sidebar["nav-item"], pathname === "/zisty-accounts/account-related" && sidebar["active"])}><a href="/zisty-accounts/account-related">Account Related</a></div>
                <div className={clsx(sidebar["nav-item"], pathname === "/zisty-accounts/two-step-verification" && sidebar["active"])}><a href="/zisty-accounts/two-step-verification">Two-Step Verification</a></div>
                <div className={clsx(sidebar["nav-item"], pathname === "/zisty-accounts/add-email-address" && sidebar["active"])}><a href="/zisty-accounts/add-email-address">Add Email Address</a></div>
                <div className={clsx(sidebar["nav-item"], pathname === "/zisty-accounts/troubleshooting" && sidebar["active"])}><a href="/zisty-accounts/troubleshooting">Troubleshooting</a></div>

                <p>⚖️ Policy</p>
                <div className={clsx(sidebar["nav-item"])}><a href="https://zisty.net/terms" target="_blank" rel="noopener noreferrer">Terms of Service <i className="bi bi-box-arrow-up-right"></i></a></div>
                <div className={clsx(sidebar["nav-item"])}><a href="https://zisty.net/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy <i className="bi bi-box-arrow-up-right"></i></a></div>
                <div className={clsx(sidebar["nav-item"])}><a href="https://zisty.net/cookie/" target="_blank" rel="noopener noreferrer">Cookie Policy <i className="bi bi-box-arrow-up-right"></i></a></div>
            </nav>


            {isOpen && <div className={sidebar.overlay} onClick={() => setIsOpen(false)}></div>}
        </>
    )
}