import React from 'react'

export default function Start({setName1 ,setName2 , setStart}) {
  return (
    
    
    <div className="bg-gradient-to-r flex justify-center items-center">
    <form className="bg-white p-8 rounded-lg m-4 shadow-lg w-full sm:w-96 flex flex-col space-y-4"
    >
      <h1 className="text-2xl font-semibold text-center text-gray-800">XO اهلًا بكم في لعبة </h1>

      <input
        type="text"
        required
        style={{textAlign:"end"}}
        onChange={(e)=>{
          setName1(e.target.value)
        }}
        placeholder="اسم اللاعب الأول"
        className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <input
        type="text"
        required
        style={{textAlign:"end"}}
        onChange={(e)=>{
          setName2(e.target.value)
        }}
        placeholder="اسم اللاعب الثاني"
        className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    
      <button
        type="submit"
        className="bg-red-500 text-white p-3 rounded-lg font-semibold hover:bg-red-600 focus:outline-none"
        onClick={(e)=>{
            e.preventDefault();
            setStart(false);
        }}
        >
        ابدأ
      </button>

    </form>
  </div>




  )
}
