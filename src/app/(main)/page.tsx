import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import HamburguerButton from "@/components/ui/hamburguer-button";
import Image from "next/image";

export default function MainPage() {
	return (
		<>
			<div className="flex min-h-screen justify-center items-center">
				<div className="flex-col">
					<div>
						<p className="text-white">
							Hi I `&apos;m crypto brog, and you`&apos;re a crypto bro without life{" "}
							<br></br>I created a &quot;Cero Utility&quot; coin for you to get a life
						</p>
					</div>
					<h1 className="text-pink-600 text-6xl p-4">👋 $Crypto Brog</h1>

					<Image
						src="/dognolife.png"
						alt="Vercel Logo"
						width={200}
						height={48}
						priority
						className="flex w-full p-4"
					/>
					<Card className="bg-pink-600 text-white m-8 p-4">
						<CardHeader>
							<CardTitle>NoLifecoin</CardTitle>
							<CardDescription>
								Working all day you don`&apos;t have life
							</CardDescription>
							<Image
								src="/coin.png"
								alt="Vercel Logo"
								width={200}
								height={48}
								priority
								className="flex w-full p-4"
							/>
						</CardHeader>
					</Card>
				</div>
			</div>
		</>
	);
}
