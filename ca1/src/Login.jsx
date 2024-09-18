import "./login.css";

export default function Login() {
  return (
    <div class="card">
      <h1>Login Here</h1>
      <form>
        <label class="abc" htmlFor="user">
          UserName
        </label>
        <br />
        <input id="user" placeholder="Email or Phone" />
        <br />
        <label class="abc" for="pass">
          Password
        </label>
        <br />
        <input id="pass" placeholder="Password" />
        <br />
        <br />
        <button class="btn">Log In</button>
        <br />
        <br />
        <span>
          <button class="btn1">Google</button>
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>
          <button class="btn1">Facebook</button>
        </span>
      </form>
    </div>
  );
}
