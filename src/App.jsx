import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, BrowserRouter, data, useNavigate } from 'react-router-dom'
import ProductList from './pages/admin/ProductList';
import AddProduct from './pages/admin/AddProduct';
import UpdateProduct from './pages/admin/UpdateProduct';
import DetailProduct from './pages/admin/DetailProduct';


function App() {
  // Hiển thị
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3000/products", {
      method: "GET",
    })
      .then((reponse) => {
        return reponse.json();
      })
      .then((data) => {
        setProducts(data);
      })
  })

  // Xoá sản phẩm
  const onRemove = (id) => {
    if (confirm("Bạn có chắc chắc muốn xoá sản phẩm?")) {
      fetch(`http://localhost:3000/products/${id}`, {
        method: "delete",
      });
      const newData = products.filter((item) => {
        return item.id != id;
      })
      setProducts(newData);
    }
  }

  //Thêm mới
  const onAdd = (product) => {
    fetch("http://localhost:3000/products",{
      method :"POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(product),
    })
    .then((reponse)=>{
      return reponse.json();
    })
    .then((data)=>{
      alert("Thêm mới sản phẩm thành công");
      setProducts([...products,data]);
      navigate("/admin/products")
    })
  }

  //Sửa sản phẩm
  const onUpdate = (product) =>{
    fetch(`http://localhost:3000/products/${product.id}`,{
      method:"PUT",
      headers:{
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(product),
    })
    .then((response)=>response.json())
    .then((data)=>{
      setProducts(products.map((item)=>(item.id == data.id ? data :item)));//cập nhật một sản phẩm cụ thể trong mảng 
      alert("Cập nhật sản phẩm thành công");
      navigate("/admin/products");
    })

  }


  return (
    <Routes>
      <Route path="/" element={<h1>Trang chủ</h1>} />

      {/* hiển thị , khi hiển thị xong thì thêm  onRemove={onRemove} để xoá*/}
      <Route path='/admin/products'
        element={<ProductList products={products} onRemove={onRemove} />}
      />

      {/* Thêm mới sản phẩm */}
      <Route path='/admin/products/add'
        element={<AddProduct onAdd={onAdd} />}
      />

      {/* Sửa sản phẩm */}
      <Route path='/admin/products/:id/edit'
    element = {<UpdateProduct onUpdate = {onUpdate} />}
    />

      {/* Chi tiết sản phẩm */}
      <Route path='/admin/products/:id'
    element = {<DetailProduct  />}
    />
    </Routes>
  )
}

export default App;

//Bước 1: Khởi tạo ứng dụng và quản lý trạng thái
// useState([]): Tạo một trạng thái rỗng cho products.
// useEffect: Khi ứng dụng khởi động, lệnh fetch được thực thi để lấy dữ liệu từ API.
// Bước 2: Gọi API
// Gửi yêu cầu HTTP đến endpoint http://localhost:3000/products.
// Nhận dữ liệu JSON từ phản hồi.
// Cập nhật dữ liệu vào products thông qua setProducts.
// Bước 3: Định nghĩa các route
// Sử dụng Routes và Route để cấu hình các đường dẫn trong ứng dụng:
// "/": Hiển thị nội dung "Trang chủ".
// "/admin/products": Gọi component ProductList và truyền dữ liệu products làm props.
// Bước 4: Hiển thị dữ liệu trong ProductList
// ProductList nhận props.products từ App.
// Duyệt qua props.products bằng map để tạo các dòng dữ liệu trong bảng.
// Hiển thị thông tin sản phẩm (STT, tên, giá, ảnh, mô tả) theo định dạng bảng HTML.
