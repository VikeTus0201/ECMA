import { Link } from "react-router-dom";

const ProductList = (props) =>{
    console.log(props);
    return(
        <main>
        <h2>Danh sách sản phẩm 2</h2>
        <Link to={'/admin/products/add'}>
        <button class="btn btn-primary">Thêm mới sản phẩm</button>
        </Link>
        <table class = "table">
            <thead>
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Ảnh </th>
                    <th scope="col">Mô tả </th>
                    <th scope="col">Thao tác </th>
                </tr>
            </thead>
            <tbody>
                {props.products.map((item, index) =>
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                        <img src={item.image} alt="" style={{width:100}}/>
                    </td>
                    <td>{item.description}</td>

                    {/* Xoá sản phẩm */}
                    <td>
                        <button onClick={() => props.onRemove(item.id)} class="btn btn-primary">Xoá</button>
                    </td>

                    {/* CẬP NHẬT SẢN PHẨM */}
                    <td>
                        <Link to={`/admin/products/${item.id}/edit`}>
                        <button class="btn btn-primary">Sửa</button>
                        </Link>
                    </td>
                    {/* Chi tiết sản phẩm */}
                    <td>
                        <Link to={`/admin/products/${item.id}`}>
                        <button class="btn btn-primary">Chi tiết</button>
                        </Link>
                    </td>
                </tr>
                )}
            </tbody>
            
        </table>
        </main>
    )
}
export default ProductList;