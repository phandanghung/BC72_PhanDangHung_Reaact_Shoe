import React, { useState } from 'react'
import { dataShoe } from './dataShoe'
import ListShoe from './ListShoe';
import Cart from './Cart';

export default function Shoe() {

    const [cart, setCart] = useState([]);
    const [shoeArr, setShoeArr] = useState(dataShoe);
    let handleRemoveList = (showId) => { 
        const updateList = shoeArr.filter((item => {return item.id !== showId}))
        setShoeArr(updateList)
     }
     let handleAddToCart = (shoe) => {
        // let data = { ...shoe, total: 1 };
        // let newCart = [...cart, data];
        // setCart(newCart);
        // findIndex để biết là đã có trong giỏ hàng chưa
        let cloneCart = [...cart];
    
        let index = cloneCart.findIndex((item) => item.id == shoe.id);
        if (index == -1) {
          // ko tìm thấy
          // th1 : chưa có trong giỏ hàng => thêm vào giỏ hàng
          let data = { ...shoe, total: 1 };
          cloneCart.push(data);
        } else {
          // th2 : đã có trong giỏ hàng => tăng số lượng
          cloneCart[index].total++
        }
        setCart(cloneCart);
      };
    let handleRemoveCart = (shoeId) => { 
        let updateCart = cart.filter((item) => item.id !== shoeId);
        setCart(updateCart);
    }
    let increseButton = (shoeId) => { 
      let increaseButton = [...cart];
      let index = increaseButton.findIndex((item) =>{return item.id == shoeId});
      increaseButton[index].total++;
      setCart(increaseButton)
    }
    let decreaseButton = (shoeId) => { 
      let updatedCart = [...cart];  // Tạo bản sao của cart
      let index = updatedCart.findIndex((item) => item.id == shoeId);  // Tìm sản phẩm theo id
    
      if (index !== -1) {  // Kiểm tra sản phẩm có tồn tại trong cart
        updatedCart[index].total--;  // Giảm số lượng sản phẩm
    
        // Nếu total của sản phẩm bằng 0, xóa sản phẩm khỏi giỏ hàng
        if (updatedCart[index].total === 0) {
          updatedCart.splice(index, 1);  // Xóa sản phẩm tại vị trí index
        }
    
        setCart(updatedCart);  // Cập nhật lại state cart
      }
    };
    

  return (
    <div className="row align-items-start">
        <Cart cart={cart} handleRemoveCart={handleRemoveCart} increaseButton={increseButton} decreaseButton={decreaseButton}/>
        <ListShoe dataShoe={shoeArr} handleRemoveList={handleRemoveList}  handleAddToCart={ handleAddToCart}/>
    </div>
  )
}
