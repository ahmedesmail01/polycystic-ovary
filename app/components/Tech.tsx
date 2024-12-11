import Image from "next/image";
import React from "react";
// import skeleton from "@/public/images/skeleton.svg";
import circleSvg from "@/public/images/blue-circle.svg";
import cardPhoto from "@/public/images/card-photo-mob.svg";
import cardPhotoMob from "@/public/images/card-photo-mob.svg";
// import triangles from "@/public/images/triangles.svg";/

const Tech = () => {
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
        <div className="  w-full flex flex-col  px-4     lg:justify-center h-auto  lg:items-start">
          <h1 className="  text-[#22646b]  lg:text-right  [font-family:--font-monadi] w-full  text-[18px]  lg:text-[28px] font-normal ">
            التقنيات المستخدمة في الجلسات{" "}
          </h1>

          <p className="self-stretch text-white text-right [font-family:--font-monadi] text-lg lg:text-2xl font-normal ">
            فهم جذر المرض
          </p>

          <div className="flex gap-3 items-center py-2 px-2">
            <Image src={circleSvg} alt="circle" />
            <p className=" text-white text-right lg:mb-1  text-[14px] [font-family:--font-cairo] lg:text-[16px] font-normal  opacity-80 leading-relaxed">
              كل نسيج جسدي مرتبط بشعور محدد{" "}
            </p>
          </div>
          <div className="flex gap-3 items-center py-2 px-2">
            <Image src={circleSvg} alt="circle" />
            <p className=" text-white text-right lg:mb-1  text-[14px] [font-family:--font-cairo] lg:text-[16px] font-normal  opacity-80 leading-relaxed">
                المرض هو صوره الاضطراب الشعورى المقابل للنسيج{" "}
            </p>
          </div>

          <p className="self-stretch text-white text-right [font-family:--font-monadi] text-lg lg:text-2xl font-normal ">
            تلقي رسالة المرض{" "}
          </p>

          <div className="flex gap-3 items-center py-2 px-2">
            <Image src={circleSvg} alt="circle" />
            <p className=" text-white text-right lg:mb-1  text-[14px] [font-family:--font-cairo] lg:text-[16px] font-normal  opacity-80 leading-relaxed">
               المرض رسالة من مشاعرك المضطربة، وبمجرد فهمها تبدأ عملية الشفاء
              الذاتى{" "}
            </p>
          </div>

          <p className="self-stretch text-white text-right [font-family:--font-monadi] text-lg lg:text-2xl font-normal ">
            التدريب على الاتزان الشعوري{" "}
          </p>

          <div className="flex gap-3 items-center py-2 px-2">
            <Image src={circleSvg} alt="circle" />
            <p className=" text-white text-right lg:mb-1   text-[14px] [font-family:--font-cairo] lg:text-[16px] font-normal  opacity-80 leading-relaxed">
              تدريبات مكثفة  على على اختيار المشاعر المتزنة، مما يوثر ايجابا عى
              صحتك و حالتك الشعوريه{" "}
            </p>
          </div>
          <a
            href="#subscribe"
            className="flex text-white w-[247px] h-[55px] mt-6  bg-gradient-to-r from-[#5beaf9] to-[#2c818a] text-sm lg:text-2xl   justify-center items-center gap-2  shadow-md px-4 py-2 rounded-lg"
          >
            <p className="pt-2">اشترك الآن</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tech;
