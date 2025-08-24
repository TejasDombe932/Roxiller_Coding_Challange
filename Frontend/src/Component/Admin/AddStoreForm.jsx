import "./AddStoreForm.css";

function AddStoreForm() {
  return (
    <div className="add-store">
      <h2>Add Store</h2>
      <form>
        <input type="text" placeholder="Store Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Address" />
        <button type="submit">Add Store</button>
      </form>
    </div>
  );
}
export default AddStoreForm;
