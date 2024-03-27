import Image from "next/image";
import HamburguerButton from "@/components/ui/hamburguer-button";
import { NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

import Link from "next/link";

type Props = {
	children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
	return (
		<div className="grid grid-cols-3">
			<div className="flex item1 col-span-3 items-center bg-pink-600 h-20">
				<div className="flex w-full justify-center p-4">
					<div className="flex text-white text-2xl">
            <h1 className="text-2xl">NO LIFE MEME</h1>
					</div>
				</div>
			</div>
			<div className="item2 col-span-full bg-dark text-black text-center p-5 text-3xlbiana min-h-screen">
				{children}
			</div>
			<div className="item5 col-span-full bg-white text-black text-center p-5 text-3xl">
				Footer
			</div>
		</div>
	);
}
