
import { useState } from "react";
import "./App.css";

const costs = {
  red: 49,
  yellow: 65,
  purple: 89,
  orange: 109,
  blue: 145,
};

function generatePlaces(n = 0, color, className, handler) {
  return Array.from(Array(n).keys()).map((item) => {
    return (
      <div key={item} onClick={() => handler(color)} className={className} />
    );
  });
}

function App() {
  const [currentPrice, setCurrentPrice] = useState(0);
  const [ticketsCount, setTicketsCount] = useState(0);

  const summa = 0

  const hendler = () => {

  }
  const handler = (color) => {
    setCurrentPrice((prev) => prev + costs[color]);
    setTicketsCount((prev) => prev + 1);
  };

  return (
<>
    <h2 className='parter'>Партер</h2>

    <div className='price'>

      <div className='first-prise'>
        <div className='first-color'></div>
        <div className='first-text'>49 $</div>
      </div>

      <div className='second-prise'>
      <div className='second-color'></div>
      <div className='second-text'>65 $</div>
    </div>
      <h2 className="parter">Партер</h2>

      <div className="price">
        <div className="first-prise">
          <div className="first-color"></div>
          <div className="first-text">49 $</div>
        </div>

        <div className="second-prise">
          <div className="second-color"></div>
          <div className="second-text">65 $</div>
        </div>

        <div className="third-prise">
          <div className="third-color"></div>
          <div className="third-text">89 $</div>
        </div>

        <div className="fourth-prise">
          <div className="fourth-color"></div>
          <div className="fourth-text">109 $</div>
        </div>

        <div className="fifth-prise">
          <div className="fifth-color"></div>
          <div className="fifth-text">145 $</div>
        </div>
      </div>

      <div className='third-prise'>
      <div className='third-color'></div>
      <div className='third-text'>89 $</div>
      </div>
      {/* // места */}

      <div className='fourth-prise'>
      <div className='fourth-color'></div>
      <div className='fourth-text'>109 $</div>
      </div>

      <div className='fifth-prise'>
      <div className='fifth-color'></div>
      <div className='fifth-text'>145 $</div>
      </div>

    </div>


                      {/* // места */}

    <div className='place'>


      <div className='place-1'>
          <div className='place-1-text'>Ряд 1</div>
          <div className='place-color-1'>
            <div onClick={hendler} className='place-red'></div>
            <div onClick={hendler} className='place-red'></div>
            <div onClick={hendler} className='place-red'></div>
            <div onClick={hendler} className='place-red'></div>
            <div onClick={hendler} className='place-red'></div>
            <div onClick={hendler} className='place-red'></div>
            <div onClick={hendler} className='place-red'></div>
            <div onClick={hendler} className='place-red'></div>
            <div onClick={hendler} className='place-red'></div>
            <div onClick={hendler} className='place-red'></div>
            <div onClick={hendler} className='place-red'></div>
      <div className="place">
        <div className="place-1">
          <div className="place-1-text">Ряд 1</div>
          <div className="place-color-1">
            {generatePlaces(11, "red", "place-red", handler)}
          </div>
      </div>
        </div>
        </div>
        </div>

      <div className='place-2'>
          <div className='place-2-text'>Ряд 2</div>
          <div className='place-color-2'>
            <div onClick={hendler} className='place-red-2'></div>
            <div onClick={hendler} className='place-red-2'></div>
            <div onClick={hendler} className='place-red-2'></div>
            <div onClick={hendler} className='place-red-2'></div>
            <div onClick={hendler} className='place-red-2'></div>
            <div onClick={hendler} className='place-red-2'></div>
            <div onClick={hendler} className='place-red-2'></div>
            <div onClick={hendler} className='place-red-2'></div>
            <div onClick={hendler} className='place-red-2'></div>
            <div onClick={hendler} className='place-red-2'></div>
            <div onClick={hendler} className='place-red-2'></div>
            <div onClick={hendler} className='place-red-2'></div>
            <div onClick={hendler} className='place-red-2'></div>
        <div className="place-2">
          <div className="place-2-text">Ряд 2</div>
          <div className="place-color-2">
            {generatePlaces(13, "red", "place-red-2", handler)}
          </div>
      </div>
        </div>
        </div>

      <div className='place-3'>
         <div className='place-3-text'>Ряд 3</div>
         <div className='place-color-3'>
            <div onClick={hendler} className='place-yellow'></div>
            <div onClick={hendler} className='place-yellow'></div>
            <div onClick={hendler} className='place-yellow'></div>
            <div onClick={hendler} className='place-yellow'></div>
            <div onClick={hendler} className='place-yellow'></div>
            <div onClick={hendler} className='place-yellow'></div>
            <div onClick={hendler} className='place-yellow'></div>
            <div onClick={hendler} className='place-yellow'></div>
            <div onClick={hendler} className='place-yellow'></div>
            <div onClick={hendler} className='place-yellow'></div>
            <div onClick={hendler} className='place-yellow'></div>
            <div onClick={hendler} className='place-yellow'></div>
            <div onClick={hendler} className='place-yellow'></div>
            <div onClick={hendler} className='place-yellow'></div>
            <div onClick={hendler} className='place-yellow'></div>
        <div className="place-3">
          <div className="place-3-text">Ряд 3</div>
          <div className="place-color-3">
            {generatePlaces(15, "yellow", "place-yellow", handler)}
          </div>
      </div>
        </div>
        </div>

      <div className='place-4'>
         <div className='place-4-text'>Ряд 4</div>
         <div className='place-color-4'>
            <div onClick={hendler} className='place-yellow-2'></div>
            <div onClick={hendler} className='place-yellow-2'></div>
            <div onClick={hendler} className='place-yellow-2'></div>
            <div onClick={hendler} className='place-yellow-2'></div>
            <div onClick={hendler} className='place-yellow-2'></div>
            <div onClick={hendler} className='place-yellow-2'></div>
            <div onClick={hendler} className='place-yellow-2'></div>
            <div onClick={hendler} className='place-yellow-2'></div>
            <div onClick={hendler} className='place-yellow-2'></div>
            <div onClick={hendler} className='place-yellow-2'></div>
            <div onClick={hendler} className='place-yellow-2'></div>
            <div onClick={hendler} className='place-yellow-2'></div>
            <div onClick={hendler} className='place-yellow-2'></div>
            <div onClick={hendler} className='place-yellow-2'></div>
            <div onClick={hendler} className='place-yellow-2'></div>
        <div className="place-4">
          <div className="place-4-text">Ряд 4</div>
          <div className="place-color-4">
            {generatePlaces(15, "yellow", "place-yellow-2", handler)}
          </div>
      </div>
        </div>
        </div>

      <div className='place-5'>
         <div className='place-5-text'>Ряд 5</div>
         <div className='place-color-5'>
            <div onClick={hendler} className='place-purple'></div>
            <div onClick={hendler} className='place-purple'></div>
            <div onClick={hendler} className='place-purple'></div>
            <div onClick={hendler} className='place-purple'></div>
            <div onClick={hendler} className='place-purple'></div>
            <div onClick={hendler} className='place-purple'></div>
            <div onClick={hendler} className='place-purple'></div>
            <div onClick={hendler} className='place-purple'></div>
            <div onClick={hendler} className='place-purple'></div>
            <div onClick={hendler} className='place-purple'></div>
            <div onClick={hendler} className='place-purple'></div>
            <div onClick={hendler} className='place-purple'></div>
            <div onClick={hendler} className='place-purple'></div>
            <div onClick={hendler} className='place-purple'></div>
            <div onClick={hendler} className='place-purple'></div>
            <div onClick={hendler} className='place-purple'></div>
            <div onClick={hendler} className='place-purple'></div>
        <div className="place-5">
          <div className="place-5-text">Ряд 5</div>
          <div className="place-color-5">
            {generatePlaces(17, "purple", "place-purple", handler)}
          </div>
      </div>
        </div>
        </div>

      <div className='place-6'>
         <div className='place-6-text'>Ряд 6</div>
         <div className='place-color-6'>
            <div onClick={hendler} className='place-purple-2'></div>
            <div onClick={hendler} className='place-purple-2'></div>
            <div onClick={hendler} className='place-purple-2'></div>
            <div onClick={hendler} className='place-purple-2'></div>
            <div onClick={hendler} className='place-purple-2'></div>
            <div onClick={hendler} className='place-purple-2'></div>
            <div onClick={hendler} className='place-purple-2'></div>
            <div onClick={hendler} className='place-purple-2'></div>
            <div onClick={hendler} className='place-purple-2'></div>
            <div onClick={hendler} className='place-purple-2'></div>
            <div onClick={hendler} className='place-purple-2'></div>
            <div onClick={hendler} className='place-purple-2'></div>
            <div onClick={hendler} className='place-purple-2'></div>
            <div onClick={hendler} className='place-purple-2'></div>
            <div onClick={hendler} className='place-purple-2'></div>
            <div onClick={hendler} className='place-purple-2'></div>
            <div onClick={hendler} className='place-purple-2'></div>
        <div className="place-6">
          <div className="place-6-text">Ряд 6</div>
          <div className="place-color-6">
            {generatePlaces(17, "purple", "place-purple-2", handler)}
          </div>
      </div>
        </div>
        </div>

      <div className='place-7'>
         <div className='place-7-text'>Ряд 7</div>
         <div className='place-color-7'>
            <div onClick={hendler} className='place-orange'></div>
            <div onClick={hendler} className='place-orange'></div>
            <div onClick={hendler} className='place-orange'></div>
            <div onClick={hendler} className='place-orange'></div>
            <div onClick={hendler} className='place-orange'></div>
            <div onClick={hendler} className='place-orange'></div>
            <div onClick={hendler} className='place-orange'></div>
            <div onClick={hendler} className='place-orange'></div>
            <div onClick={hendler} className='place-orange'></div>
            <div onClick={hendler} className='place-orange'></div>
            <div onClick={hendler} className='place-orange'></div>
            <div onClick={hendler} className='place-orange'></div>
            <div onClick={hendler} className='place-orange'></div>
            <div onClick={hendler} className='place-orange'></div>
            <div onClick={hendler} className='place-orange'></div>
            <div onClick={hendler} className='place-orange'></div>
            <div onClick={hendler} className='place-orange'></div>
            <div onClick={hendler} className='place-orange'></div>
            <div onClick={hendler} className='place-orange'></div>
        <div className="place-7">
          <div className="place-7-text">Ряд 7</div>
          <div className="place-color-7">
            {generatePlaces(19, "orange", "place-orange", handler)}
          </div>
      </div>
        </div>
        </div>

      <div className='place-8'>
         <div className='place-8-text'>Ряд 8</div>
         <div className='place-color-8'>
            <div onClick={hendler} className='place-orange-2'></div>
            <div onClick={hendler} className='place-orange-2'></div>
            <div onClick={hendler} className='place-orange-2'></div>
            <div onClick={hendler} className='place-orange-2'></div>
            <div onClick={hendler} className='place-orange-2'></div>
            <div onClick={hendler} className='place-orange-2'></div>
            <div onClick={hendler} className='place-orange-2'></div>
            <div onClick={hendler} className='place-orange-2'></div>
            <div onClick={hendler} className='place-orange-2'></div>
            <div onClick={hendler} className='place-orange-2'></div>
            <div onClick={hendler} className='place-orange-2'></div>
            <div onClick={hendler} className='place-orange-2'></div>
            <div onClick={hendler} className='place-orange-2'></div>
            <div onClick={hendler} className='place-orange-2'></div>
            <div onClick={hendler} className='place-orange-2'></div>
            <div onClick={hendler} className='place-orange-2'></div>
            <div onClick={hendler} className='place-orange-2'></div>
            <div onClick={hendler} className='place-orange-2'></div>
            <div onClick={hendler} className='place-orange-2'></div>
        <div className="place-8">
          <div className="place-8-text">Ряд 8</div>
          <div className="place-color-8">
            {generatePlaces(19, "orange", "place-orange-2", handler)}
          </div>
      </div>
        </div>
        </div>

      <div className='place-9'>
          <div className='place-9-text'>Ряд 9</div>
          <div className='place-color-9'>
            <div onClick={hendler} className='place-blue'></div>
            <div onClick={hendler} className='place-blue'></div>
            <div onClick={hendler} className='place-blue'></div>
            <div onClick={hendler} className='place-blue'></div>
            <div onClick={hendler} className='place-blue'></div>
            <div onClick={hendler} className='place-blue'></div>
            <div onClick={hendler} className='place-blue'></div>
            <div onClick={hendler} className='place-blue'></div>
            <div onClick={hendler} className='place-blue'></div>
            <div onClick={hendler} className='place-blue'></div>
            <div onClick={hendler} className='place-blue'></div>
            <div onClick={hendler} className='place-blue'></div>
            <div onClick={hendler} className='place-blue'></div>
            <div onClick={hendler} className='place-blue'></div>
            <div onClick={hendler} className='place-blue'></div>
            <div onClick={hendler} className='place-blue'></div>
            <div onClick={hendler} className='place-blue'></div>
            <div onClick={hendler} className='place-blue'></div>
            <div onClick={hendler} className='place-blue'></div>
        <div className="place-9">
          <div className="place-9-text">Ряд 9</div>
          <div className="place-color-9">
            {generatePlaces(19, "blue", "place-blue", handler)}
          </div>
      </div>
        </div>
        </div>

      <div className='place-10'>
         <div className='place-10-text'>Ряд 10</div>
         <div className='place-color-10'>
            <div onClick={hendler} className='place-blue-2'></div>
            <div onClick={hendler} className='place-blue-2'></div>
            <div onClick={hendler} className='place-blue-2'></div>
            <div onClick={hendler} className='place-blue-2'></div>
            <div onClick={hendler} className='place-blue-2'></div>
            <div onClick={hendler} className='place-blue-2'></div>
            <div onClick={hendler} className='place-blue-2'></div>
            <div onClick={hendler} className='place-blue-2'></div>
            <div onClick={hendler} className='place-blue-2'></div>
            <div onClick={hendler} className='place-blue-2'></div>
            <div onClick={hendler} className='place-blue-2'></div>
            <div onClick={hendler} className='place-blue-2'></div>
            <div onClick={hendler} className='place-blue-2'></div>
            <div onClick={hendler} className='place-blue-2'></div>
            <div onClick={hendler} className='place-blue-2'></div>
            <div onClick={hendler} className='place-blue-2'></div>
            <div onClick={hendler} className='place-blue-2'></div>
            <div onClick={hendler} className='place-blue-2'></div>
            <div onClick={hendler} className='place-blue-2'></div>
        <div className="place-10">
          <div className="place-10-text">Ряд 10</div>
          <div className="place-color-10">
            {generatePlaces(19, "blue", "place-blue-2", handler)}
          </div>
      </div>
      </div>
    </div>


                  {/* оплата */}


    <div>

    <div className='pay'>

      <div className='total'>1 билет</div>
      <div className='summa'>{summa} $</div>

    </div>

    <div className='pay-2'>

      <div className='kupit'>Купить</div>

    </div>
        </div>

                  {/* оплата */}
      


  
        <div className="pay">
          <div className="total">{ticketsCount} билет</div>
          <div className="summa">{currentPrice} $</div>
        </div>

        <div className="pay-2">
          <div className="kupit">Купить</div>
        </div>

        </div>
      
    </>
  )
  }

export default App;