export default function Line() {
  return (
    <div className="fixed top-80 right-10">
      <div className="flex flex-col justify-center align-center ">
        <div>
          <p className="text-[40px]">01</p>
        </div>

        <div className="flex justify-center">
          <div className="flex h-20 w-0.5 bg-black justify-center"></div>
        </div>
        <div>
          <p className="text-[40px]">02</p>
        </div>

        <div className="flex justify-center">
          <div className="flex h-20 w-0.5 bg-black justify-center"></div>
        </div>
        <div>
          <p className="text-[40px]">03</p>
        </div>
      </div>
    </div>
  );
}
