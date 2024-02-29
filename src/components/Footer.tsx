import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <p>© 2024 PIZZERIA Clone! No rights reserved - this is a demo!</p>
      <InstagramIcon className="icon ig" />
      <TwitterIcon className="icon tw" />
      <LinkedInIcon className="icon lk" />
      <YouTubeIcon className="icon yt" />
    </footer>
  );
}

export default Footer;
