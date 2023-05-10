import axios from "axios";

axios.defaults.baseURL = "https://quintadb.ru/apps/";
axios.defaults.params = {
  rest_api_key: "",
  //rest_api_key: process.env.REACT_APP_API_KEY_QUINTA,
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

  const data = response.data.records.map((item) => ({
    values: item.values,
    created_at: item.created_at,
    id: item.id,
    updated_at: item.updated_at,
  }));

  return data;
};
