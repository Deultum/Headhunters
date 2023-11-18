const Register = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
       
      };
    return (
        <div className="register-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label HtmlFor="fullname">Full Name</label>
                    <input type="text" id="fullname" name="fullname" placeholder="Enter your full name" required />
                </div>
                <div className="form-group">
                    <label HtmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                    <label HtmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
        
    )
};
export default Register;