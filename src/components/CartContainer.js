import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import CartItem from "./CartItem";
import {clearCart, getCartTotal, getCartItems} from '../features/cartSlice'
const CartContainer = () => {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCartTotal())
  },[items])
  if (items.length === 0) {
    return (
      <>
      <h3 className="fs-bold mt-4">
      {" "}
      Your Shopping{" "}
      <span>
        <MDBIcon fas icon="shopping-bag"></MDBIcon>
      </span>{" "}
      is Empty
      </h3>
      <MDBBtn className="mx-2" onClick={() => dispatch(getCartItems())} >
        Get Items
      </MDBBtn>
      </>
    )
  }
  return (
    <>
      <h2 className="lead-mb-0 mt-2">Your Shopping Cart</h2>
      {items.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <footer>
        <hr />
        <div>
          <h4
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginRight: "60px",
            }}
          >
            Total : <span>${totalAmount} </span>
          </h4>
        </div>
        <MDBBtn
        color="danger"
        onClick={() => dispatch(clearCart())}
        style={{ width: "140px", marginTop: "50px" }}
      >
        Clear Cart
      </MDBBtn>
      </footer>
    </>
  );
};

export default CartContainer;
