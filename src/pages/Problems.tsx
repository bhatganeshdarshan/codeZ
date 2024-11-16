import Navbar from "../components/Navbar";

export default function Problems({
  isDarkMode,
  toggleDarkMode,
}: {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}) {
  return (
    <>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div
        className={`min-h-screen shadow-lg ${
          isDarkMode ? "bg-[#171717] text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex items-center justify-center py-20">
          <h1 className="text-4xl font-bold">Problems</h1>
        </div>
      </div>
    </>
  );
}
