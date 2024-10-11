import React from 'react'
import { Button, message, Popconfirm } from 'antd';
import Item from "./Item"
export default function ListShoe({dataShoe,handleRemoveList, handleAddToCart}) {
    const confirm = (itemId) => {
        handleRemoveList(itemId) // Giảm số lượng sản phẩm hoặc xóa nếu `total === 1`
        message.success('Deleted successfully');
      };
    
      // Hàm xử lý khi người dùng hủy bỏ xác nhận
      const cancel = () => {
        message.error('Action cancelled');
      };
    let renderList = () => { 
        console.log(dataShoe)
        return dataShoe.map((item,index) =>{
            return(
                <Item key={index}
                item ={item}
                handleRemoveList={handleRemoveList}
                handleAddToCart = {handleAddToCart}
                />
                
            );
        })
     }
  return (
    <div className='row col-5 gap-3'>{renderList()}</div>
  )
}
