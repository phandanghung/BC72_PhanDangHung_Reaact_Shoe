import React from 'react'
import { Button, message, Popconfirm } from 'antd';

export default function Cart({ cart, handleRemoveCart, increaseButton, decreaseButton }) {

  // Hàm xử lý khi người dùng xác nhận xóa sản phẩm
  const confirm = (itemId) => {
    decreaseButton(itemId);  // Giảm số lượng sản phẩm hoặc xóa nếu `total === 1`
    message.success('Deleted successfully');
  };

  // Hàm xử lý khi người dùng hủy bỏ xác nhận
  const cancel = () => {
    message.error('Action cancelled');
  };

  // Hàm render nội dung bảng giỏ hàng
  let renderTbody = () => {
    return cart.map((item) => {
      return (
        <tr key={item.id} className='d-flex justify-content-between'>
          <td>{item.name}</td>
          <td>
            <img src={item.image} width="100" alt={item.name} />
          </td>
          <td>{item.price}</td>
          <td className='d-flex gap-3 align-items-center'>
            {item.total === 1 ? (
              <Popconfirm
                title="Delete the product"
                description="Are you sure you want to delete this product?"
                onConfirm={() => confirm(item.id)}  // Gọi hàm confirm với item.id
                onCancel={cancel}  // Gọi hàm cancel
                okText="Yes"
                cancelText="No"
              >
                <Button>delete</Button>
              </Popconfirm>
            ) : (
              <button onClick={() => { decreaseButton(item.id) }}>-</button>
            )}
            <p>{item.total}</p>
            <button onClick={() => { increaseButton(item.id) }}>+</button>
          </td>
          <td>
            <button onClick={() => { handleRemoveCart(item.id) }} className="btn btn-danger">Delete</button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className='col-7'>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {renderTbody()}
        </tbody>
      </table>
    </div>
  );
}
