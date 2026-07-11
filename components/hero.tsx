export default function Hero() {
  return (
    <section className="relative z-10 flex h-screen w-full items-center">
      <div className="flex flex-col gap-12 p-6 sm:gap-16 sm:p-8 md:gap-24 md:p-12 lg:gap-32 lg:p-16 xl:gap-40 xl:p-20 2xl:gap-48 2xl:p-24">
        <div>
          <p className="w-80 text-4xl sm:w-80 sm:text-4xl md:w-80 md:text-5xl lg:w-120 lg:text-6xl xl:w-230 xl:text-[120px] 2xl:w-260 2xl:text-[130px]">
            everything is designed but few things are designed well.
          </p>
        </div>
        <div className="flex flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24">
          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[50px] 2xl:text-[56px]">
              See how
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
