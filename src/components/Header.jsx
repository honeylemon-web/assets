import Navigation from "./Navigation";
import Logo from "./Logo";

export default function Header() {
    return (
      <header>
        <div>
          <h1>Birdwatching</h1>
          <Logo />
          <Navigation />
        </div>
      </header>
    );
  }