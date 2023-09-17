import Link from "next/link"
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
export default function Header() {
    return (
        <div className="flex items-center justify-between m-2">
            <div>
                <h1 className="text-2xl font-semibold">PharmaChain</h1>
            </div>
            <div>
                <Link href="/" className="mx-8 text-xl font-bold">Home</Link>
                <Link href="/dashboard" className="mx-8 text-xl font-bold">Dashboard</Link>
            </div>
            <ConnectButton className="mx-8" />
        </div>
    )
}