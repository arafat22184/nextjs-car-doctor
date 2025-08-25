import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";

const ServiceDeatailsPage = async ({ params }) => {
  const { id } = await params;
  const servicesCollection = dbConnect(collectionNamesObj.services);
  const data = await servicesCollection.findOne({ _id: new ObjectId(id) });

  return (
    <div>
      <section className="flex justify-center">
        <figure className="relative">
          <Image
            width={1137}
            height={300}
            src={"/assets/images/checkout/checkout.png"}
            alt="Checkout image"
          ></Image>
          <div className="flex items-center absolute w-full h-full top-0 bg-black/50 border border-red-500">
            <h1 className="text-white font-bold ml-24 text-[45px]">
              Service Details
            </h1>
          </div>
        </figure>
      </section>

      <section>
        <Image src={data.img} width={400} height={280} alt={data.title} />
        <h1 className="font-bold text-4xl">{data.title}</h1>
      </section>
      {JSON.stringify(data)}
    </div>
  );
};
export default ServiceDeatailsPage;
