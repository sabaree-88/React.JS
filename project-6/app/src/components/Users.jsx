import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081")
      .then((res) => setData(res.data))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/user/${id}`);
      setData(data.filter((user) => user.id !== id));
    } catch (err) {
      console.error("Error deleting the user:", err);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center bg-stone-900 min-h-[100vh] w-full ">
        <div className="w-1/2 bg-white rounded-sm min-h-[50vh] p-5 mt-16 mb-16">
          <Link
            to="/create"
            className="bg-green-500 px-4 py-2 rounded-md text-white text-xl align-middle"
          >
            Add Student
          </Link>

          <div className="relative overflow-x-auto mt-4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-900 uppercase bg-gray-500 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, i) => (
                  <tr key={i} className="border-b">
                    <td scope="col" className="px-6 py-2">
                      {item.id}
                    </td>
                    <td scope="col" className="px-6 py-2">
                      {item.name}
                    </td>
                    <td scope="col" className="px-6 py-2">
                      {item.email}
                    </td>
                    <td scope="col" className="px-6 py-2">
                      <Link
                        to={`update/${item.id}`}
                        className="bg-yellow-500 text-white px-2 py-1 m-1 rounded-sm"
                      >
                        Edit
                      </Link>
                      <button
                        className="bg-red-500 text-white px-2 py-1 m-1 rounded-sm"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
