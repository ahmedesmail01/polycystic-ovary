import Image from "next/image";
import React from "react";
// import skeleton from "@/public/images/skeleton.svg";
// import circleSvg from "@/public/images/Ellipse 1909.svg";
import cardPhoto from "@/public/images/card-photo.svg";
import cardPhotoMob from "@/public/images/card-photo-mob.svg";
// import triangles from "@/public/images/triangles.svg";/
import Marq from "./Marq";

const SecTwo = () => {
  return (
    <div className="relative z-40 flex max-w-full   flex-col px-6 md:px-8 lg:px-[166px] gap-4 justify-center  mb-[60px] md:mb-[96px] ">
      <Marq />
      <div
        dir="rtl"
        className=" w-full flex py-8  flex-col justify-center items-center  lg:flex lg:flex-row-reverse lg:items-center lg:justify-center gap-10 "
      >
        <Image src={cardPhoto} alt="photo" className="hidden lg:flex z-40" />
        <Image
          src={cardPhotoMob}
          alt="photo"
          className="block lg:hidden w-[300px] z-40"
        />
        <div className="  w-full flex flex-col  px-4    gap-4 lg:justify-center h-auto  lg:items-start">
          {/* triangles pattern */}
          {/* <Image
            src={triangles}
            alt="triangles"
            className="absolute left-0 top-48 z-10"
          /> */}
          <h1 className="  text-[#22646b] text-center lg:text-right mb-[20px] [font-family:--font-monadi] w-full  text-[18px]  lg:text-[28px] font-normal ">
            جلسات الاتزان شفاء (تكيس المبايض){" "}
          </h1>

          <bdi className=" text-white text-right [font-family:--font-cairo] text-[16px] lg:text-[20px]  ">
            تعتمد المجموعات العلاجية &quot;جلسات الاتزان شفاء&quot; على تفعيل
            آلية التشافي الذاتي
          </bdi>

          <p className=" text-white text-right lg:mb-1  text-[14px] [font-family:--font-cairo] lg:text-[16px] font-normal  opacity-80 leading-relaxed">
            لتشافي الذاتي يبدأ باستعادة الاتزان الشعوري، وهو حال السكون
            والطمأنينة تجاه الأحداث والأفكار، حيث إن الإنسان كيان متكامل من
            الجسد والمشاعر، وأي اضطراب شعوري ينعكس على الجسد في صورة مرض، وهذه
            الجلسات تمكن الفرد من فهم وإدارة مشاعره المضطربة التي تُعد السبب
            الجذري للاضطرابات الصحية، فالتشافي الذاتي هو نظام فطري أودعه الله في
            كل إنسان، وباستعادة التوازن الداخلي يساعد الجسد على استعادة عافيته
            ورفع جودة الحياة نفسيًا وجسديًا.
          </p>

          <a
            href="#subscribe"
            className="flex text-white w-[247px] h-[55px] lg:mt-10  bg-gradient-to-r from-[#5beaf9] to-[#2c818a] text-sm lg:text-2xl   justify-center items-center gap-2  shadow-md px-4 py-2 rounded-lg"
          >
            <p className="pt-2">اشترك الآن</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SecTwo;
