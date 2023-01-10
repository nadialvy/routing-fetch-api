export default function ListCity({ city }){
    return(
        <div className="w-1/5 mx-2 my-4 h-20 bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg flex items-center justify-center" key={city.id}>
            <div className="">
                <h1 className="text-xl text-white font-semibold line-clamp-2 text-center">{city.name}</h1>
            </div>
        </div>
    );
}