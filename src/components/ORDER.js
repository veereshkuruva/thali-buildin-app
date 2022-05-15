import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { RemoveItem } from '../redux/slice';



const Cart = () => {
  const thali = useSelector(state => state.counter.thali)
  const despatch = useDispatch()
  const Remove = (id) => {
    despatch(RemoveItem(id))

  }
  const order = () => {

    if(thali.length<2){
      Swal.fire({
        icon: 'error',
        title: 'Oops...😥😫',
        text: 'Order at least 2 item.',
      
      })
    }else{

      Swal.fire(
        'Ordered sucessfull💙💚🧡!',
        'You clicked the button!',
        'success'
      )
      thali.length=0
    }
    
  }
  var sum = 0
  for (const item of thali) {
    sum = sum + item.totalPrice
  }
  return (
    <div className='item_item'>
      <div className='row'>
        {
          thali.map((ele, ind) => (<>

            <div className="d-flex border  ">
              <div className="item_image">
                <img src={ele.image} style={{ height: "100px", width: "100px" }} />
              </div>
              <div className="item_desc">

                <h6 className="mx-3"> Item :{ele.name}</h6>
                <div>
                  <div className='d-flex'>

                    <h6 className="mx-"> Qty:{ele.quantity}</h6>

                    <h6 className="mx-1"> Price :{ele.totalPrice}</h6>
                  </div>
                  <button onClick={() => Remove(ind)} className="mx-3  btn btn-danger btn-sm">Remove</button>
                </div>
              </div>
            </div>

          </>
          )
          )
        }
        <button className='btn_cart_checkout mx-3 my-3' onClick={order}>
          Order Now <button className='btn_qwt_state_price'>{sum}</button></button>
      </div>
    </div>
  )
}

export default Cart