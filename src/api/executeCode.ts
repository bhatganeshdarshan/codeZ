import axios from "axios";

const Judge0Api = "http://localhost:2358";

// to submit code to judge0
export const submitCode = async (code: string) => {
  try {
    const response = await axios.post(`${Judge0Api}/submissions/`, {
      language_id: 52,
      source_code: code,
    });
    return response.data.token;
  } catch (error) {
    console.log("submission error : ", error);
    throw new Error("Failed to submit the code ");
  }
};

// checking resul t of the code
// shitty code need to retunr proper data
export const checkSubmissionResult = async (token: string) => {
  try {
    const response = await axios.get(
      `${Judge0Api}/submissions/${token}?base64_encoded=true&fields=stdout,stderr,status_id,language_id,token,compile_output,status`,
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.log("Error while running the code : ", error);
    throw new Error("Failed to execute the code ");
  }
};
