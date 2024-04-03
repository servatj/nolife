import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ArrowDownToLine } from "lucide-react";
import HamburguerButton from "@/components/ui/hamburguer-button";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Roadmap from "@/components/ui/roadmap";

export default function MainPage() {

	const milestones =[
		{ label: "Development", year: "2024 Q1" },
		{ label: "Presale", year: "2024 Q2" },
		{ label: "Exchange Listing ", year: "2024 Q3 🚀" },
		{ label: "Zero Utility", year: "2024 Q4 🌝" }
	]
  
	return (
		<>
			<div className="flex min-h-screen justify-center items-center">
				<div className="flex-col gap-4">
					<div>
						<p className="text-white">
							Hi I `&apos;m crypto brog, and you`&apos;re a crypto bro without life{" "}
							<br></br>I created a &quot;Zero Utility&quot; coin for you to get a life
						</p>
					</div>
					<h1 className="text-pink-600 text-6xl p-4">👋 $Crypto Brog</h1>
					<h3 className="text-white">Former PVU and Axie pro player ...<span className="text-pink-400">He Lost it all!</span></h3>
					<Image
						src="/dognolif-new.png"
						alt="Vercel Logo"
						width={200}
						height={48}
						priority
						className="flex w-full p-4"
					/>
					
					<div className="flex justify-center items-center">
					  <ArrowDownToLine size={48} className="text-pink-600" />
					</div>
					
					<Card className="bg-pink-600 text-white m-8 p-4">
						<CardHeader>
							<CardTitle>NoLifecoin</CardTitle>
							<CardDescription>
								Working all day you don`&apos;t have life <br></br>
								have a coin that represents you
								more than anything else!
							</CardDescription>
							<Image
								src="/coin.png"
								alt="Vercel Logo"
								width={200}
								height={48}
								priority
								className="flex w-full p-4"
							/>
							<Button variant="default" color="primary">Pre Sale</Button>
						</CardHeader>
					</Card>

					<h1 className="text-pink-600 text-6xl p-4">Roadmap</h1>
					
					<Roadmap 
 						milestones={milestones}
			      selected={2} 
          />
          
					<div>
						<p className="text-white">
							Hey doge here if you missed dogecoin, you can buy this coin!{" "}
							<br></br>It has no utility, but can make you rich!
						</p>
					</div>
          <Image
						src="/doge.gif"
						alt="Vercel Logo"
						width={200}
						height={48}
						priority
						className="flex w-full p-4"
					/>
				</div>			
			</div>
		</>
	);
}
