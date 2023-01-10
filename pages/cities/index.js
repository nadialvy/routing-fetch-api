import ListCity from '../../components/ListCity';

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'cities.json');
    const jsonData = await fsPromises.readFile(filePath);
    const data = JSON.parse(jsonData);
    return {
        props: data
    }
}

export default function Cities(props){
    const cities = props.data.cities;

    return (
      <div className="px-24 py-12">
        <div className="flex flex-wrap items-center justify-center">
          {cities.map(city =>
            <ListCity city={city}/>
            )
          }
        </div>
      </div>
    )
  
}