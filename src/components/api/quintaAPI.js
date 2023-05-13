import axios from "axios";

axios.defaults.baseURL = "https://quintadb.com/apps/";
axios.defaults.params = {
  rest_api_key: "ctamoPsq5ecyjQWRVdICov",
  //rest_api_key: process.env.REACT_APP_API_KEY_QUINTA,
};

export const title = "dcSSoXAwPet6xcHCkKhmob";
export const text = "bHWRemWPncVAuptSoJW6am";
const entity_id = "aBp8kNvtrdMRxdLryLhvqh";

export const getFields = async () => {
  try {
    const response = await axios.get(
      "ddGcVcMh1dQApcG8ovW44k/dtypes/entity/aBp8kNvtrdMRxdLryLhvqh.json"
    );

    return response.data.records;
  } catch (error) {
    console.log("Something is wrong: " + error);
  }
};

export const updateNote = async (body) => {
  if (!body) return;
  console.log(body);
  const { id } = body;
  const reqBody = {
    //rest_api_key: "bNWQ40WQ1dGyoZcIyon8o0",
    values: { [title]: body.title, [text]: body.text },
  };
  console.log("reqbody", reqBody);
  try {
    const { data } = await axios.put(
      `ddGcVcMh1dQApcG8ovW44k/dtypes/${id}.json`,
      reqBody
    );
    return data;
  } catch (error) {
    console.log("Error: " + error);
  }
};

export const createNote = async (note) => {
  const reqBody = {
    //rest_api_key: "bNWQ40WQ1dGyoZcIyon8o0",
    values: {
      entity_id,
      [title]: "New note title ",
      [text]: "New note text",
    },
  };

  try {
    const { data } = await axios.post(
      `ddGcVcMh1dQApcG8ovW44k/dtypes.json`,
      reqBody
    );
    return data;
  } catch (error) {
    console.log("Error: " + error);
  }
};

export const deleteNote = async (noteIdToDelete) => {
  try {
    const { data } = await axios.delete(
      `ddGcVcMh1dQApcG8ovW44k/dtypes/${noteIdToDelete}.json`
    );
    return data;
  } catch (error) {
    console.log("Error: " + error);
  }
};
