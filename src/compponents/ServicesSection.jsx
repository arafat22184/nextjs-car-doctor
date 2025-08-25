import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default async function ServicesSection() {
  const servicesCollection = dbConnect(collectionNamesObj.services);
  const data = await servicesCollection.find({}).toArray();

  return (
    <div className="grid grid-cols-12 mx-auto max-w-7xl gap-6">
      {data.map((item) => {
        return (
          <div
            key={item._id}
            className="col-span-12 md:col-span-6 lg:col-span-4 p-6 rounded-xl border border-[#E8E8E8]"
          >
            <figure className="w-full h-3/4 flex justify-center items-center">
              <Image
                src={item.img}
                width={314}
                height={208}
                alt={item.title}
                className="object-fit h-full w-full rounded-xl"
              ></Image>
            </figure>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-2xl">{item.title}</h4>
                <p className="font-semibold text-orange-500">
                  Price : ${item.price}
                </p>
              </div>
              <Link href={`/services/${item._id}`} className="text-orange-500">
                <FaArrowRight />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
