"use client"

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./mode-toggle"

export function Header() {
    return (
        <div className="border-b">
            <div className="h-16 container flex justify-between items-center">
                <div>NextJS App</div>

                <div className="flex gap-4 items-center">
                    <SignedIn>
                        <UserButton></UserButton>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton></SignInButton>
                    </SignedOut>
                    <ModeToggle />
                </div>
            </div>
        </div>
    );
}