import { Button } from "./ui/button";
import ProductCardModel from "./product-card-model";
import Image from "next/image";

export default function Product_card() {
  return (
    <div className="flex h-120 w-90 flex-col bg-gray-300 rounded-2xl">
      <div className=" flex justify-center h-70 m-2 rounded-xl bg-gray-400 overflow-hidden">
        <Image
          className="justify-center flex items-center "
          src="/image-headphones.png"
          width={300}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <div className="flex flex-col p-4">
        <p className="font-bold">Headphones ultra 2k</p>
        <p>this the most beutifull headphones to runnin and create content.</p>
      </div>
      <div className="flex mt-6 flex-row justify-between items-end px-3 ">
        <div>
          <Button
            variant={"outline"}
            className="w-20 h-10 rounded-4xl justify-center flex items-center "
          >
            <p className="font-bold">$ 100</p>
          </Button>
        </div>
        <div>
          <Button className="w-40 h-10 rounded-4xl">
            <p className="font-bold">Buy now</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
