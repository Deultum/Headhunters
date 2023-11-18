const Create = ()=> {
    const handleSubmit = (event) => {
        event.preventDefault();
       
      };
    return (
        <div className="create-container">
      <h2>Create</h2>
      <form className="create-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label" htmlFor="title">Title</label>
          <input className="input" type="text" id="title" name="title" placeholder="Enter title" required />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="description">Description</label>
          <textarea className="input" id="description" name="description" placeholder="Enter description" required />
        </div>
        <button className="button" type="submit">Create</button>
      </form>
    </div>
      
    )
}
export default Create;