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
			<div className="flex bg-pink-600 min-h-screen justify-center items-center">
        <div className="flex-col">
          <Image
            src="/dognolife.jpeg"
            alt="Vercel Logo"
            width={100}
            height={24}
            priority
            className="flex w-full p-4"
          />
          <Card className="">
            <CardHeader>
              <CardTitle>No Life</CardTitle>
              <CardDescription>Working all day you don't have life</CardDescription>
            </CardHeader>
          </Card>

        </div>
			</div>
		</>
	);
}
