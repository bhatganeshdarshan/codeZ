export default function Home() {
  return (
    <div className="flex justify-between shadow-lg h-[80vh]">
      <div className="flex items-center justify-center bg-white dark:bg-gray-800 w-1/2">
        <h1>left</h1>
      </div>
      <div className="bg-gray-200 dark:bg-gray-600 w-1/2">
        <h1>test right </h1>
      </div>
    </div>
  );
}
