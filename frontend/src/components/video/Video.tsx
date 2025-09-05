import { useSocket } from "@/context/soketContext";

function Video() {
  const { socket } = useSocket();

  return <div className="container mx-auto">video commonent</div>;
}

export default Video;
