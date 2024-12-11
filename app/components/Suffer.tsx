import Image from "next/image";
import React from "react";
// import skeleton from "@/public/images/skeleton.svg";
// import circleSvg from "@/public/images/Ellipse 1909.svg";
import cardPhoto from "@/public/images/card-photo-mob.svg";
import cardPhotoMob from "@/public/images/card-photo-mob.svg";
// import triangles from "@/public/images/triangles.svg";/

const Suffer = () => {
  return (
    <div className="relative z-40 flex max-w-full text-start  flex-col px-6 md:px-8 lg:px-[166px] gap-4 justify-center  mb-[60px] md:mb-[96px] ">
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
          <h1 className="  text-[#22646b]  lg:text-right  [font-family:--font-monadi] w-full  text-[18px]  lg:text-[28px] font-normal ">
            تكيس المبايض{" "}
          </h1>

          <p className=" text-white text-right lg:mb-1  text-[14px] [font-family:--font-cairo] lg:text-[16px] font-normal  opacity-80 leading-relaxed">
            تكيس المبايض هو اضطراب شائع يُصيب النساء في سن الإنجاب، يتمثل في
            ظهور أكياس صغيرة مليئة بالسوائل داخل المبيضين مما يُؤثر على
            وظائفهما. {" "}
          </p>

          <h2 className="  text-[#22646b]  lg:text-right  [font-family:--font-monadi] w-full  text-[18px]  lg:text-[28px] font-normal ">
            معاناة مريضة تكيس المبايض:{" "}
          </h2>

          <p className=" text-white text-right lg:mb-1  text-[14px] [font-family:--font-cairo] lg:text-[16px] font-normal  opacity-80 leading-relaxed">
            عدم انتظام الدورة الشهرية والألم المرافق لها وللتبويض و تأخر الحمل
            وصعوبات الإنجاب. و زيادة الوزن ومقاومة الإنسولين، مما يسبب تحديات
            صحية إضافية.اضافة الي المعاناة مع العلاجات الهرمونية وآثارها
            الجانبية السلبية.
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

export default Suffer;
