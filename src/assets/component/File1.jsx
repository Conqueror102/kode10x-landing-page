import File2 from "./File2";

const File1 = () => {
  return (
    <div className="flex justify-center items-center gap-3 flex-wrap">
      <File2
        companyName="Google"
        price="$2200-$4000"
        color="bg-green-300"
        title="Remote"
        logo="../../../public/s10.png"
      />
      <File2
        companyName="Kode10x"
        price="$1200-$2000"
        color="bg-red-300"
        title="on-site"
          logo="../../../public/s1.png"
      />
      <File2
        companyName="Amazon"
        price="$1600-$5000"
        color="bg-blue-300"
        title="Remote"
          logo="../../../public/s11.png"
      />
      <File2
        companyName="Metaverse"
        price="$5200-$3000"
        color="bg-yellow-300"
        title="hybrid"
          logo="../../../public/s12.png"
      />
      <File2
        companyName="Invidia"
        price="$3200-$8000"
        color="bg-gray-300"
        title="on-site"
          logo="../../../public/s13.png"
      />
    </div>
  );
};

export default File1;
