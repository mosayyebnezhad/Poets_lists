// import Image from "next/image";

import axios from "axios";

export default async function Home() {


  let Data: any[] = (await axios.get("https://api.ganjoor.net/api/ganjoor/poets")).data


  return (


    <div className="flex flex-wrap gap-2 justify-center mt-4">








      {Data.map((item: any, index: number) => {
        return (


          <div key={index} className="bg-gray-700 w-64 flex justify-center flex-wrap py-12 rounded-lg">


            <h1 className="w-full text-center text-4xl font-extrabold">{item.name}</h1>
            <img src={"https://api.ganjoor.net" + item.imageUrl} alt={item.name} />

          </div>
        )
      })}

    </div>

  );
}
