"use client";

export default function Phase02() {
  return (
    <div className="h-screen w-full p-24">
      <div className="h-full">
        <div className=" flex justify-center">
          <p className="text-[80px] w-160 flex text-center">
            The best material
          </p>
        </div>
        <div className="flex flex-col mt-40 gap-4">
          <p className="text-[50px] w-150 ">
            Crafted from aerospace-grade aluminum and genuine leather
          </p>
          <p className="text-[30px]">Designed to last, built to be felt.</p>
        </div>
        <div className="flex flex-col mt-20 gap-4 w-full justify-end items-end">
          <p className="text-[50px] text-end">Silent world, pure sound.</p>
          <p className="text-[30px] text-end w-140">
            Active noise cancellation that lets you choose what you hear.
          </p>
        </div>
      </div>
    </div>
  );
}
