import "./StoreList.css";

function StoreList() {
  return (
    <div className="store-list">
      <h2>All Stores</h2>
      <table>
        <thead>
          <tr>
            <th>Store Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Reliance</td>
            <td>reliance@mail.com</td>
            <td>Pune</td>
            <td>4.5</td>
          </tr>
          <tr>
            <td>D-Mart</td>
            <td>dmart@mail.com</td>
            <td>Mumbai</td>
            <td>4.2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default StoreList;
