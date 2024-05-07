import { useState } from "react";
import axios from "axios";

const useCrud = (BASEURL) => {
  const [response, setResponse] = useState();

  const getApi = (put) => {
    const url = `${BASEURL}${put}`;
    axios
      .get(url)
      .then((res) => setResponse(res.data))
      .catch((err) => console.log(err));
  };

  const postApi = (put, data) => {
    const url = `${BASEURL}${put}`;
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
        setResponse([...response, res.data]);
      })
      .catch((err) => console.log(err));
  };

  const deleteApi = (put, id) => {
    const url = `${BASEURL}${put}${id}/`;
    axios
      .delete(url)
      .then((res) => {
        console.log(res.data);
        setResponse(response.filter((e) => e.id !== id));
      })
      .catch((err) => console.log(err));
  };

  const updateApi = (put, id, data) => {
    const url = `${BASEURL}${put}${id}/`;
    axios
      .patch(url, data)
      .then((res) => {
        console.log(res.data);
        setResponse(response.map((e) => (e.id === id ? res.data : e)));
      })
      .catch((err) => console.log(err));
  };

  return [response, getApi, postApi, deleteApi, updateApi];
};

export default useCrud;
