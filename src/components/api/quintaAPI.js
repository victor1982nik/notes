import axios from "axios";
//import API_KEY_QUINTA from "../../.env.local";

//const result = dotenv.config();

//console.log(dotenv);
axios.defaults.baseURL = "https://quintadb.ru/apps/";
axios.defaults.params = {
  rest_api_key: "",
};

export const getFieldsNames = async () => {
  const response = await axios.get(
    "bKWQvDWPbdNjxdGLb3bCok/entities/dcJSosW7DcGBNdTe1ggmox/properties.json"
  );
  console.log(response.data.fields);
};

export const getFields = async () => {
  const response = await axios.get(
    "bKWQvDWPbdNjxdGLb3bCok/dtypes/entity/dcJSosW7DcGBNdTe1ggmox.json"
  );
  //console.log(response.data.records);
  const data = response.data.records.map((item) => ({
    values: item.values,
    created_at: item.created_at,
    id: item.id,
    updated_at: item.updated_at,
  }));
  //console.log(data);
  return data;
};
