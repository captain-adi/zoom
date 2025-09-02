
function Dashboard() {
  return (
    <div className=" flex justify-center items-center h-screen w-full">
      <div className="flex  items-center h-full gap-5 container mx-auto">
        <div className="flex flex-col gap-9 ">
          <div>
            <h1 className="text-7xl  font-medium">Video</h1>
            <h1 className="text-7xl  font-medium">Conferencing</h1>
          </div>
          <h2 className="text-muted-foreground text-2xl">
            Connect with your team and organize meetings seamlessly
          </h2>
          <button className="bg-blue-500 text-xl font-bold text-white py-4 px-8 rounded self-start">
            Start a Meeting
          </button>
        </div>

        <img src="./public/home.png" alt="" className="rounded-xl" />
      </div>
    </div>
  );
}

export default Dashboard;
