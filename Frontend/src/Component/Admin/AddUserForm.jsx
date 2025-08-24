import "./AddUserForm.css";

function AddUserForm() {
  return (
    <div className="add-user">
      <h2>Add User</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Address" />
        <input type="password" placeholder="Password" />
        <select>
          <option value="normal">Normal</option>
          <option value="admin">Admin</option>
          <option value="storeOwner">Store Owner</option>
        </select>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
export default AddUserForm;
