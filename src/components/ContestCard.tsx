type ContestCardProps = {
    title: string;
    date: string;
    duration: string;
    participants: number;
    isUpcoming?: boolean;
  };
  
  export default function ContestCard({
    title = "Weekly Contest 69",
    date = "November 18, 2024",
    duration = "2 hours",
    participants = 150,
    isUpcoming = true,
  }: ContestCardProps) {
    return (
      <div className="w-96 h-60 p-6 rounded-lg border border-gray-200 bg-white dark:bg-[#171717] shadow-md hover:shadow-xl transition duration-300">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">{title}</h2>
          {isUpcoming && (
            <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none">
              Register
            </button>
          )}
        </div>
        <div className="text-gray-600 dark:text-gray-400 mb-2">
          <p>
            <strong>Date:</strong> {date}
          </p>
          <p>
            <strong>Duration:</strong> {duration}
          </p>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <p className="text-gray-500 dark:text-gray-400">
            <strong>Participants:</strong> {participants}
          </p>
          <div
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              isUpcoming
                ? "bg-green-100 text-green-600 dark:bg-green-800 dark:text-green-300"
                : "bg-red-100 text-red-600 dark:bg-red-800 dark:text-red-300"
            }`}
          >
            {isUpcoming ? "Upcoming" : "Completed"}
          </div>
        </div>
      </div>
    );
  }
  