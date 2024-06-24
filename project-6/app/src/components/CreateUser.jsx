import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8081/user/${id}`)
        .then((res) => {
          const { name, email } = res.data;
          setName(name);
          setEmail(email);
        })
        .catch((err) => {
          console.error("Error fetching user data:", err);
          setError(
            "Error fetching user data: " +
              (err.response?.data?.message || err.message)
          );
        });
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const request = id
      ? axios.put(`http://localhost:8081/user/${id}`, { name, email })
      : axios.post("http://localhost:8081/user", { name, email });

    request
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.error("Error submitting form:", err);
        setError(
          "Error submitting form: " +
            (err.response?.data?.message || err.message)
        );
      });
  };

  return (
    <div className="flex justify-center items-center w-full min-h-[100vh] bg-gray-900">
      <div className="w-1/2 bg-white rounded-sm p-8">
        {error && <p className="text-red-500">{error}</p>}
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Sabareesh"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="sabareesh@company.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {id ? "Update" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
