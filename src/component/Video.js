import './Video.css';
const src="https://www.youtube.com/embed/f3KetYps05U?si=u7O3OErpsIiKcz5t";
const Video = () => {
    return(
        <div class = "vid">
        <iframe class = "vd"
      width="560"
      height="315"
      src={src}
      title="Youtube Player"
      frameborder="0"
      allowFullScreen
        />
        </div>
        )
    }
export default Video;