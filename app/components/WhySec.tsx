"use client";

import React from "react";
// import cardTriangles from "@/public/images/card-triangles.svg";
import Image from "next/image";
import fasla from "@/public/images/fasla.svg";
// import logo from "@/public/images/logo.svg";
import girlCard from "@/public/images/girl-card.svg";
import triangles from "@/public/images/shadow-circle.svg";

const WhySec = () => {
  const items = [
    {
      title: "فهم علاقة الجسد والمشاعر",
      desc: "رؤية واضحة لعلاقة مشاعرك والمرض، مما يساعدك على فهم السبب الجذري الشعوري للمرض",
    },
    {
      title: "استعادة القدرة الفطرية على الشفاء",
      desc: "تدريبات شعورية مكثفة، لتتعلم  إدارة ذاتك ومشاعرك بفعالية،عند ادارتك لذاتك و مشاعرك بفاعلية تتحسن حالتك الصحية  مع كل تحسن في إدارتك الشعورية  مما يعزز تحسن حالتك الصحية تدريجيًا.",
    },
  ];
  return (
    <div className=" relative w-full flex flex-col gap-4  justify-center items-center px-4 mb-[60px] lg:mb-[96px]">
      <Image
        src={triangles}
        alt="triangles"
        className="absolute -right-10 -top-[1000px] z-10"
      />
      <h1 className="self-stretch text-[#22646b] text-center font-[PNU] text-2xl lg:text-[40px] font-bold leading-[160%] lg:mb-[48px]">
        لماذا جلسات &quot;الاتزان شفاء&quot;؟
      </h1>

      <div
        dir="rtl"
        className="flex flex-col lg:flex-row gap-4 justify-between"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-transparent text-start relative w-[300px] md:w-[360px] h-auto pb-4 lg:h-[520px] flex flex-col gap-4 bg-white text-black  border border-[#22646b] rounded-lg overflow-hidden"
          >
            <Image
              src={fasla}
              alt="fasla"
              className="absolute lg:left-4 left-2 top-[230px] lg:top-[280px] w-16"
            />
            <Image src={girlCard} alt="shape" className="w-full " />
            <h1 className=" px-6 [font-family:--font-monadi] text-start text-[#353939] text-lg  ">
              {item.title}
            </h1>
            <p className=" [font-family:--font-cairo]  w-full px-6">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhySec;
