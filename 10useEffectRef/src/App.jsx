import {useState, useCallback, useEffect, useRef } from "react";


function App() {
  
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if(numberAllowed) str += "123456789";
      if(charAllowed) str += "~`!@#$%^&*()-_+={}[]";

      for(let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length);
        pass += str.charAt(char);
      }

      setPassword(pass);

  },)

  useEffect(() => {
      passwordGenerator();
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyToClipboard = useCallback(() => {
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0, 100);
      window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
      <div className="bg-black w-full h-screen p-10">
          <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto my-6 text-orange-500 bg-gray-800 shadow-md rounded-lg p-5">
            <h1 className="text-center text-white mb-4">Password Generator</h1>
            <div className="w-full flex shadow rounded-lg overflow-hidden mb-4">
              <input 
              type="text"
              ref = {passwordRef}
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="outline-none w-full py-1 px-3 rounded-l-md bg-gray-300"
              placeholder="password"
              />
              <button 
              className=" outline-none px-3 py-0.5 shrink-0 bg-blue-400 text-white w-20 cursor-pointer hover:bg-blue-700"
              onClick={copyToClipboard}>
                copy
              </button>
            </div>
            <div className="flex justify-between text-sm gap-x-5 w-full">
              <div className="flex items-center justify-center gap-x-1">
                <input 
                  type="range"
                  min = {6}
                  max = {100}
                  value = {length}
                  onChange={e => setLength(e.target.value)}
                  className="cursor-pointer"
                />
                <label>Length: {length}</label>
              </div>
              <div className="flex items-center justify-center gap-x-1">
                  <input 
                    type="checkbox" 
                    defaultChecked={numberAllowed}
                    id="numberInput"
                    onChange={() => setNumberAllowed(prev => !prev)}
                    className="cursor-pointer"
                  />
                  <label htmlFor="numberInput">Number</label>
              </div>
              <div className="flex items-center justify-center gap-x-1">
                  <input 
                    type="checkbox" 
                    defaultChecked={charAllowed}
                    id="charInput"
                    onChange={() => setCharAllowed(prev => !prev)}
                    className="cursor-pointer"
                  />
                  <label htmlFor="charInput">Character</label>
              </div>
            </div>
          </div>
      </div>
  );
}

export default App
