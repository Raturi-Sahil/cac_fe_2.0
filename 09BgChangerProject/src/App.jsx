  import { useState } from "react"

  function App() {

    const [color, setColor] = useState("olive");

    return (
      
      <div className="w-full h-screen duration-200"  
      style={{backgroundColor: color}} >{/*It's the entire screen size container whose background will be changed*/}

        {/*Div which is fixed at the bottom*/}
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            
            {/**/}
            <div className="flex flex-wrap justify-center gap-3 shadow-lg px-4 py-2 bg-white rounded-4xl">

                {/*One thing to note here is that we usually pass reference in onclick but then if we pass setColor only and not setColor("red") then how
                would the state change, this is a parameter related issue here so we use an anonymous fxn wrapper that wraps our main setColor("red") fxn so cuz of this our setColor won't execute immediately when the file is loaded.*/}
                <button 
                onClick={()=> setColor("red")} 
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                style={{backgroundColor: "red"}}
                >Red</button>


                <button 
                onClick={()=> setColor("blue")}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                style={{backgroundColor: "blue"}}
                >blue</button>

                <button 
                onClick={()=> setColor("yellow")}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                style={{backgroundColor: "yellow"}}
                >yellow</button>


                <button 
                onClick={()=> setColor("black")}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                style={{backgroundColor: "black"}}
                >black</button>


                <button 
                onClick={()=> setColor("olive")}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                style={{backgroundColor: "olive"}}
                >olive</button>


                <button 
                onClick={()=> setColor("pink")}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                style={{backgroundColor: "pink"}}
                >pink</button>
            </div>
        </div>
      </div>
    )

    
  }

  export default App

/**
 * This is what i did in my first attempt.
 * return (
      <div className="bg-black w-full h-screen p-20 flex flex-col duration-400"
        style={{backgroundColor: color}}
      > 
        <div className="w-full h-screen"></div>
        <div className="w-full bg-gray-400 h-20 border rounded-4xl flex justify-center gap-10 p-5">
            <div onClick={() => changeBackground("red")} className="h-10 basis-1/12 shrink flex-1 bg-red-500 text-white flex items-center justify-center  border border-gray-400 rounded-full ">red</div>
            <div onClick={() => changeBackground("green")} className="h-10 basis-1/12 shrink flex-1 bg-green-500 text-white flex items-center justify-center  border border-gray-400 rounded-full ">green</div>
            <div onClick={() => changeBackground("blue")} className="h-10 basis-1/12 shrink flex-1 bg-blue-500 text-white flex items-center justify-center border border-gray-400 rounded-full ">blue</div>
            <div onClick={() => changeBackground("yellow")} className="h-10 basis-1/12 shrink flex-1 bg-yellow-500 text-white flex items-center justify-center border border-gray-400 rounded-full ">yellow</div>
            <div onClick={() => changeBackground("black")} className="h-10 basis-1/12 shrink flex-1 bg-black text-white flex items-center justify-center  border border-gray-400 rounded-full ">black</div>
            <div onClick={() => changeBackground("purple")} className="h-10 basis-1/12 shrink flex-1 bg-purple-500 text-white flex items-center justify-center border border-gray-400 rounded-full ">purple</div>
        </div>      
      </div>
    )
 */