import { useState } from 'react'

function App() {
  const [day, setDay] = useState('--')

  return (
    <div className="bg-[#f0f0f0] w-screen h-screen flex justify-center ">
      <div className="bg-white w-[840px] h-[650px] rounded-br-[190px] pl-[56px]">
        <form className="uppercase h-[206px] flex items-center">
          <div className="flex gap-8">
            <label for="day" className="flex flex-col max-w-[160px] ">
              day
              <input
                id="day"
                type="number"
                className="h-[72px] rounded-lg p-6"
                placeholder="DD"
                value={day}
                required
              />
            </label>
            <label for="month" className="flex flex-col max-w-[160px] ">
              month
              <input
                id="month"
                type="number"
                className="h-[72px] rounded-lg p-6"
                placeholder="MM"
                value={month}
                required
              />
            </label>
            <label for="year" className="flex flex-col max-w-[160px]">
              year
              <input
                id="year"
                type="number"
                className="h-[72px] rounded-lg p-6"
                placeholder="YYYY"
                value={year}
                required
              />
            </label>
          </div>
          <button
            className="bg-[#854dff] hover:bg-black hover:cursor-pointer w-[95px] h-[95px] flex items-center justify-center rounded-full"
            type="submit"
          >
            <img
              src="age-calculator-app-main/assets/images/icon-arrow.svg"
              className=""
            />
          </button>
        </form>
        <div>
          <h1>38 years</h1>
          <h1>3 months</h1>
          <h1>26 days</h1>
        </div>
      </div>
    </div>
  )
}

export default App
