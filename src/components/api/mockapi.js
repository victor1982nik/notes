import axios from "axios";

axios.defaults.baseURL = "https://6399dcce29930e2bb3e22232.mockapi.io/api";

export async function getFields() {
  try {
    const result = await axios.get("notes");
    return result.data;
  } catch (e) {
    console.log(e.message);
  }
}

export async function updateNote({id, title, text}) {
    const body = {values: {title, text}}
  try {
    const result = await axios.put(`/notes/${id}`, body);
    return result.data;
  } catch (e) {
    console.log(e.message);
  }
}

export const createNote = async (note) => {
  const reqBody = {
    values: {
      title: " ",
      text: " ",
    },
  };

  try {
    const { data } = await axios.post(`notes`, reqBody);
    return data;
  } catch (error) {
    console.log("Error: " + error);
  }
};

export const deleteNote = async (noteIdToDelete) => {
  try {
    const { data } = await axios.delete(`notes/${noteIdToDelete}`);
    return data;
  } catch (error) {
    console.log("Error: " + error);
  }
};
