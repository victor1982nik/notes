import axios from "axios";

axios.defaults.baseURL = "https://quintadb.ru/apps/";
axios.defaults.params = {
  rest_api_key: "bNWQ40WQ1dGyoZcIyon8o0",
  //rest_api_key: process.env.REACT_APP_API_KEY_QUINTA,
};

const title = "biWPGZWQbcK4JdNK_dRSoD";
const text = "ddK1ldQCnmWQJdPNSMW4D9";
const entity_id = "dcJSosW7DcGBNdTe1ggmox";

export const getFieldsNames = async () => {
  const response = await axios.get(
    "bKWQvDWPbdNjxdGLb3bCok/entities/dcJSosW7DcGBNdTe1ggmox/properties.json"
  );
  console.log(response.data.fields);
};
export const getFields = async () => {
  try {
    const response = await axios.get(
      "bKWQvDWPbdNjxdGLb3bCok/dtypes/entity/dcJSosW7DcGBNdTe1ggmox.json"
    );

    const data = response.data.records.map((item) => ({
      values: item.values,
      id: item.id,
      updated_at: item.updated_at,
    }));

    return data;
  } catch (error) {
    console.log("Something is wrong: " + error);
  }
};
//https://quintadb.ru/apps/bKWQvDWPbdNjxdGLb3bCok/dtypes/alW78vWOvcUlNdMadcH8kl.json?rest_api_key=bNWQ40WQ1dGyoZcIyon8o0
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
      `bKWQvDWPbdNjxdGLb3bCok/dtypes/${id}.json`,
      reqBody
    );
    return data;
  } catch (error) {
    console.log("Something is wrong: " + error);
  }
};

export const createNote = async (note) => {
  const reqBody = {
    rest_api_key: "bNWQ40WQ1dGyoZcIyon8o0",

    values: {
      entity_id,
      [title]: " ",
      [text]: " ",
    },
  };

  try {
    const { data } = await axios.post(
      `bKWQvDWPbdNjxdGLb3bCok/dtypes.json`,
      reqBody
    );
    return data;
  } catch (error) {
    console.log("Something is wrong: " + error);
  }
};

export const deleteNote = async (noteIdToDelete) => {
  try {
    const { data } = await axios.delete(
      `bKWQvDWPbdNjxdGLb3bCok/dtypes/${noteIdToDelete}.json`
    );
    return data;
  } catch (error) {
    console.log("Something is wrong: " + error);
  }
};
