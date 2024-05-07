import Link from 'next/link'

export function Footer(){
    return (
        <footer className="text-center p-4 text-sm text-gray-300 mt-4">
        created by <span className="text-gray-500 underline">Paulo Cesar</span> -(' ') <Link target="_blank" className="cursor-pointer hover:underline" href="https://devchallenges.io">devChallenges.io</Link>
      </footer>
    )
}