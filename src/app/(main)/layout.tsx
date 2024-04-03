import Image from "next/image";
import HamburguerButton from "@/components/ui/hamburguer-button";
import {
	NavigationMenuItem,
	NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

type Props = {
	children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
	return (
		<div className="grid grid-cols-3">
			<div className="flex item1 col-span-3 items-center bg-pink-600 h-20">
				<div className="flex w-full justify-center p-4">
					<div className="flex text-white text-2xl align-baseline">
						<h1 className="text-2x mt-2">NOLIFE COIN</h1>
						<Image
							src="/coin.png"
							alt="Vercel Logo"
							width={50}
							height={60}
							priority
							className="mb-2"
						/>
					</div>
				</div>
			</div>
			<div className="item2 col-span-full bg-dark text-black text-center p-5 text-3xlbiana min-h-screen">
				{children}
			</div>
			<div className="item2 col-span-full bg-dark text-pink-600">
				<footer className="flex justify-center items-center space-x-4 p-4">
					<a
						href="https://facebook.com"
						className="text-pink-600 hover:text-pink-800"
					>
						<Facebook size={24} />
					</a>
					<a
						href="https://twitter.com"
						className="text-pink-600 hover:text-pink-800"
					>
						<Twitter size={24} />
					</a>
					<a
						href="https://instagram.com"
						className="text-pink-600 hover:text-pink-800"
					>
						<Instagram size={24} />
					</a>
				</footer>
			</div>
		</div>
	);
}
