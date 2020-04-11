import Link from "next/link";
import "./style.scss";

const NavBar = () => {
  return (
    <>
      <nav className="NavBar">
        <div className="logo-placeholder" />
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/results">
          <a>Results</a>
        </Link>
        <Link href="/sign-up">
          <a>Sign Up</a>
        </Link>
      </nav>
      {/* <style jsx>{`
        nav.NavBar {
          margin: 30px;
          display: flex;
        }

        a {
          text-decoration: none;
          color: red;
          margin-right: 16px;
        }

        .logo-placeholder {
          background-color: "red";
          width: 200px;
          height: 50px;
        }
      `}</style> */}
    </>
  );
};

export default NavBar;
