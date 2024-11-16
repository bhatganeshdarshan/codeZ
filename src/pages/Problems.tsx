import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

type Difficulty = "Easy" | "Medium" | "Hard";

interface Question {
  id: number;
  title: string;
  difficulty: Difficulty;
  description: string;
}

const questions: Question[] = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
  },
  {
    id: 2,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    description:
      "Given a string s, find the length of the longest substring without repeating characters.",
  },
  {
    id: 3,
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    description:
      "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
  },
];

const difficultyColors: Record<Difficulty, string> = {
  Easy: "bg-green-500",
  Medium: "bg-yellow-500",
  Hard: "bg-red-500",
};

export default function Problems({
  isDarkMode,
  toggleDarkMode,
}: {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}) {
  const navigate = useNavigate();

  const handleProblemClick = (id: number) => {
    navigate(`/problems/${id}`);
  };

  return (
    <>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div
        className={`min-h-screen ${
          isDarkMode ? "bg-[#171717] text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex flex-col p-6">
          <div className="text-4xl font-bold mb-4">Problems</div>
          <div className="text-gray-500 mb-6">
            Select a question to start preparing
          </div>
          <div className="space-y-4">
            {questions.map((question) => (
              <div
                key={question.id}
                className={`p-4 border rounded-lg cursor-pointer ${
                  isDarkMode ? "border-gray-700" : "border-gray-300"
                } hover:shadow-md transition-shadow`}
                onClick={() => handleProblemClick(question.id)}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">{question.title}</h2>
                  <span
                    className={`text-sm text-white px-3 py-1 rounded-full ${
                      difficultyColors[question.difficulty]
                    }`}
                  >
                    {question.difficulty}
                  </span>
                </div>
                <p className="text-gray-400 mt-2">{question.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
