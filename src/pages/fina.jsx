import { useState } from "react"

function Fina() {
    const [income, setIncome] = useState()
    const [spending, setSpending] = useState()
    const [message, setMessage] = useState(null)


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
            <div>

                <div>
                    <form onSubmit={submitHandle}>

                        <div>
                            <label className="block">Pemasukan</label>
                            <input
                                type="text"
                                value={income}
                                onChange={e => setIncome(Number(e.target.value))}
                                className="border p-2 rounded-md" />
                        </div>

                        <div>
                            <label className="block">Pengeluaran</label>
                            <input
                                type="text" value={spending}
                                onChange={e => setSpending(Number(e.target.value))}
                                className="border p-2 rounded-md" />
                        </div>

                        <div>
                            <button>Diagnosa</button>
                        </div>

                    </form>
                </div>

                <div>

                    {message == "Sehat" && <p>Uang anda sehat</p>}
                    {message == "Belum input" && <p>Silahkan masukkan pengeluaran dan pemasukan anda</p>}
                    {message == "Tidak sehat" && <p>Uang anda tidak sehat</p>}

                </div>

            </div>
        </div>
    )
}

export default Fina