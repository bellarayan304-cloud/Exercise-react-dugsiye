
import { useState } from "react"
const shopping = () => {

  const [shope, setShope] = useState([])
  const [Value, setValue] = useState("")
  const [price, setPrice] = useState("")
  const handling = () => {

    if (Value.trim() !== "" && price.trim()) {

      const newTodo = {
        id: crypto.randomUUID(),
        text: Value,
        price: parseFloat(price),

        quantity: 1,
        compelet: false
      }
      setShope([...shope, newTodo])
      //    console.log(shope)
      setValue("");
      setPrice("");

    }


  }
  const removeShope = (id) => {
    const updateShope = shope.filter(shope => shope.id !== id)
    setShope(updateShope)

  }
  const increaseShope = (id) => {
    const updateShope = shope.map(shope => (
      shope.id === id ? { ...shope, quantity: shope.quantity + 1 } : shope

    ))
    setShope(updateShope)
  }

  const decreaseShopet = (id) => {
    const updateShope = shope.map(shope => (
      shope.id === id ? { ...shope, quantity: shope.quantity - 1 } : shope

    ))
    setShope(updateShope)
  }
  // console.log(handling)




  return (
    <div>
      <h1>shopping card</h1>
      <div>
        <h2>Add prodect</h2>

        <input type="text" placeholder="prodect Name" onChange={(Event) => setValue(Event.target.value)} value={Value} />
        <input type="number" placeholder="price" onChange={(Event) => setPrice(Event.target.value)} value={price} />
        <button onClick={handling}>Add</button>


        {
          shope.length > 0 ? (
            <div>
              <ul>
                <h2>prodects in cart</h2>



                {
                  shope.map(shope => (
                    <li key={shope.id}>
                      <strong>{shope.text}</strong>
                      <span> = ${shope.price.toFixed(2)}</span>

                      <div>
                        quantity:
                        <button onClick={() => decreaseShopet(shope.id)}>-</button>
                        {shope.quantity}
                        <button onClick={() => increaseShope(shope.id)}>+</button>

                      </div>
                      <button onClick={() => removeShope(shope.id)}>Remove</button>
                    </li>

                  ))
                }
              </ul>
            </div>
          ) : <p>emty prodect</p>
        }

      </div>
    </div>
  )

}

export default shopping;