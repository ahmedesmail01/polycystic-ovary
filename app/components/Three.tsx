import React from "react";
import heart from "@/public/images/heart.svg";
import mas from "@/public/images/mas.svg";
import pulse from "@/public/images/pulse.svg";
import Image from "next/image";

const Three = () => {
  const items = [
    {
      img: heart,
      title: "المشاعر",
      description: "ستتعلمين كيفية إدارة المشاعر المرتبطة بتكيس المبايض",
    },
    {
      img: mas,
      title: "القيمة",
      description: "ستدركين أن قيمتك لا تُستمد من الخارج بل من داخلك",
    },
    {
      img: pulse,
      title: "التشافي",
      description:
        "ستبدأين رحلة التشافي تدريجيًا مع تراجع حدة المرض وعودة المبايض لنشاطها الطبيعي",
    },
  ];
  return (
    <div className="w-full p-4 lg:py-[90px] flex flex-col lg:flex-row-reverse items-center justify-center lg:gap-20">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col my-8 justify-between gap-4 w-[255px] h-[180px] items-center"
        >
          <Image src={item.img} alt={item.title} className="mb-4" />
          <h2 >{item.title}</h2>
          <p className="text-center [font-family:--font-cairo]">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Three;
