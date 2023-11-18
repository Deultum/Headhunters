const Login = () => {
    return (
        <div className="login-container">
  <h2>Login</h2>
  <form className="login-form">
    <div className="form-group">
      <label for="username">Username</label>
      <input type="text" id="username" name="username" placeholder="Enter your username" required/>
    </div>
    <div className="form-group">
      <label for="password">Password</label>
      <input type="password" id="password" name="password" placeholder="Enter your password" required/>
    </div>
    <button type="submit" className="btn btn-primary">Login</button>
  </form>
</div>

    )
}
export default Login;