import React from 'react'

const Alertpage = ({ wishlater_button, wishnow_button }) => {
    const currantyear = new Date().getFullYear();
    const age = currantyear - 2008;

    return (
        <>
            <div className='bg-white min-h-screen w-full text-2xl text-red-600 grid justify-center bg-gradient-to-br from-blue-100 via-cyan-100 overflow-auto pl-2 pr-2 to-white items-center' style={{ bottom: '0.5px' }}>
                <div className="h-auto grid items-center justify-center pt-14 rounded-3xl p-6">
                    <div className="bg-white h-auto shadow-2xl rounded-4xl w-full lg:w-3xl p-7 pl-12 pr-12 text-center border border-cyan-200 overflow-auto ">

                        {/* Heading */}
                        <h1 className="text-4xl font-semibold text-blue-600 mb-4">
                            🎉 Birthday
                        </h1>

                        {/* Subtext */}
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Today is a special day — the developer’s birthday! 🧑‍💻🎂
                            Born on <span className="text-blue-500 font-semibold">10 October 2008</span>,
                            now turning <span className="text-cyan-400 font-semibold">{age} in {currantyear}</span>.
                            This milestone celebrates growth, passion, and dedication to innovation.
                            May it bring new achievements, creativity, and joyful moments — both in code and in life. 🎉✨
                        </p>

                        {/* Buttons */}
                        <div className="grid sm:flex gap-3 justify-center items-center flex-wrap w-full ">
                            <button 
                                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition font-medium sm:w-[45%]" 
                                onClick={wishnow_button}
                            >
                                Wish Now
                            </button>
                            <button 
                                className="bg-white border-2 hover:border-cyan-400 hover:text-cyan-500 border-blue-400 text-blue-600 px-6 py-3 rounded-2xl shadow-lg hover:bg-cyan-50 sm:w-[45%] hover:scale-105 transition font-medium" 
                                onClick={wishlater_button}
                            >
                                Wish Later
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Alertpage;
