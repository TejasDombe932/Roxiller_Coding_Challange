import "./UserList.css";

function UserList() {
  return (
    <div className="user-list">
      <h2>All Users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tejas</td>
            <td>tejas@mail.com</td>
            <td>Pune</td>
            <td>Normal</td>
          </tr>
          <tr>
            <td>Admin</td>
            <td>admin@mail.com</td>
            <td>Mumbai</td>
            <td>Admin</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default UserList;
