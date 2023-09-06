import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center container py-5">
        <Link to={"/"}>
          <h1 className="font-bold">Auth App</h1>
        </Link>

        <ul className="flex space-x-6 items-center">
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to={"/about"}>
            <li>About</li>
          </Link>

          <Link to={"/profile"}>
            {currentUser ? (
              <img
                src={currentUser.profilePicture}
                className="w-8 h-8 rounded-full object-cover"
                alt="profile"
              />
            ) : (
              <li>Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
