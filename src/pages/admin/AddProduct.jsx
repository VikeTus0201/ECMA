import React, {useState} from "react";

const AddProduct = (props) => {
    const [inputValues, setInputValues] = useState({});

    const onHandleChange = (e) =>{ //Hàm dùng để xử lý thay đổi
        const{name,value} = e.target; // Lấy name và value từ trường nhập liệu đã thay đổi
        const newData = {...inputValues, [name]: value};// Cập nhật giá trị mới vào state
        setInputValues(newData);//lưu state mới
    }
    const onHandleSubmit = (e) =>{
        e.preventDefault();// Ngăn chặn hành động mặc định (ví dụ: tải lại trang)
        if(
            inputValues.name&&
            inputValues.price&&
            inputValues.image&&
            inputValues.description){
                props.onAdd(inputValues);// Gọi hàm onAdd (truyền qua props) với dữ liệu form
            } else {
                alert("Vui lòng điền đầy đủ thông tin")
            }
    };

    // hiển thị ra form thêm mới
    return(
        <div>
            <h1>Thêm mới sản phẩm</h1>
            {/* {JSON.stringify(inputValues)} */}
            <form onSubmit={onHandleSubmit}>
                <div>
                    <label class="form-label" htmlFor="" >Tên sản phẩm</label>
                    <input class="form-control" type="text" name="name" onInput={onHandleChange}/>
                </div>

                <div>
                    <label class="form-label" htmlFor="">Giá sản phẩm</label>
                    <input class="form-control" type="text" name="price" onInput={onHandleChange}/>
                </div>

                <div>
                    <label class="form-label" htmlFor="">Ảnh sản phẩm</label>
                    <input class="form-control" type="text" name="image" onInput={onHandleChange}/>
                </div>

                <div>
                    <label class="form-label" htmlFor="">Mô tả sản phẩm</label>
                    <input class="form-control" type="text" name="description" onInput={onHandleChange}/>
                </div>
                <button>Thêm mới</button>
            </form>
        </div>
    )
}
export default AddProduct;