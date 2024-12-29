import axios from "axios";
export default async function Home() {
  let Data: any[] = (await axios.get("https://api.ganjoor.net/api/ganjoor/poets")).data

  
  return (
    <div className="flex flex-wrap gap-2 justify-center mt-4">
      {Data.map((item: any, index: number) => {
        return (
          <div key={index} className="bg-gray-700 w-64 flex justify-center flex-wrap py-12 rounded-lg">
            <a className="w-full text-center text-4xl font-extrabold" target="_blank" href={"https://ganjoor.net" + item.fullUrl}>

              <h1 >{item.nickname}</h1>
            </a>
            <img src={"https://api.ganjoor.net" + item.imageUrl} alt={item.name} />
            <h1 className="w-full text-center text-sm mt-4 font-extrabold">{item.name}</h1>
            <p className="text-gray-500 w-10/12 text-center">وی متولد {item.birthPlace?item.birthPlace:"ایران"} بود و {item.deathYearInLHijri - item.birthYearInLHijri} بهار دید</p>
            
          </div>
        )
      })}



      
    </div>
  );
}
