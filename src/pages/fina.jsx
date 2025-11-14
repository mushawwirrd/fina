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

        </div>
    )
}

export default Fina