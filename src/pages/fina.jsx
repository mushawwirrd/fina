import { useState } from "react"

function Fina() {
    const [income, setIncome] = useState()
    const [spending, setSpending] = useState()
    const [message, setMessage] = useState(null)

    function realNumber(strg) {
        return Number(strg.replace(/\./, ""))
    }

    function decimal(nmbr) {
        if (nmbr === null) return ""
        return nmbr.toString(n => n.replace(/\b/, "."))
    }

    function submitHandle(e) {
        e.preventDefault()

        if (income > spending || income === spending && income > 1 && spending > 1) {
            setMessage("Sehat")
        } else if (income < spending) {
            setMessage("Tidak sehat")
        } else {
            setMessage("Belum input")
        }

    }

    return (
        <div>

            <div className="absolute z-10">
                <nav className=" px-14 py-6 w-screen">
                    <div>
                        <a href="#" className="font-semibold text-xl text-white">FINA</a>
                    </div>
                </nav>

            </div>

            <div className=" flex flex-col items-center justify-center bg-gradient-to-b from-blue-800 to-blue-600 h-screen ">
                
                <div className="mb-8">
                    <h1 className="text-4xl text-white font-bold text-center">Cek Kondisi Kesehatan Keuangan Anda</h1>
                </div>
                
                <div className=" px-12 py-10 rounded-2xl bg-white shadow-lg w-[360px] h-[384px]">
                    <form onSubmit={submitHandle}>

                        <div className="flex flex-col items-center justify-center">

                            <div className="flex flex-col  items-start justify-start w-full mb-5">
                                <label className="text-gray-500 mb-1">Pemasukan</label>
                                <input
                                    type="text"
                                    value={income}
                                    onChange={e => setIncome(Number(e.target.value))}
                                    className="border p-4 rounded-xl w-full" />
                            </div>

                            <div className="flex flex-col items-start justify-start w-full">
                                <label className=" text-gray-500 mb-1">Pengeluaran</label>
                                <input
                                    type="text" value={spending}
                                    onChange={e => setSpending(Number(e.target.value))}
                                    className="border p-4 rounded-xl w-full " />
                            </div>

                        </div>


                        <div className="flex items-center justify-center mt-8">
                            <button className="py-3 bg-blue-500 rounded-full w-48 text-white">Diagnosa</button>
                        </div>

                        <div className="flex items-center justify-center text-center mt-4">
                            {message == "Sehat" && <p className="text-green-500">Kondisi keuangan kamu sudah sehat</p>}
                            {message == "Belum input" && <p>Kamu belum input apa - apa</p>}
                            {message == "Tidak sehat" && <p className="text-red-600">Kondisi keuangan kamu belum sehat</p>}
                        </div>



                    </form>
                </div>



            </div>
        </div>
    )
}

export default Fina