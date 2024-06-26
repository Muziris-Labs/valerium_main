import Image from "next/image";

const GasTokenImage = ({ price }) => {
  return (
    <div className="flex h-fit w-40 items-end justify-center gap-4 rounded-xl bg-black/90 py-8">
      <span className="font-gloock text-8xl text-white">{price}</span>

      <div className="flex w-fit -translate-y-1 flex-col items-center">
        <Image
          src="/valerium-gas-token.png"
          alt="Valerium Gas Token Logo"
          width={40}
          height={40}
        />

        <span className="text-4xl font-bold text-white">x</span>
      </div>
    </div>
  );
};

export default GasTokenImage;
