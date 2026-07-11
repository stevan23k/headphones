import Product_card from "./product-card";

export default function Phase03() {
  return (
    <div>
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <Product_card />
      </div>

      <div className="w-full bg-white h-40 absolute rounded-b-[80px]"></div>
    </div>
  );
}
