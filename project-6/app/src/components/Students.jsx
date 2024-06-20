import { Link } from "react-router-dom";

const Students = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-stone-900 h-[100vh] w-full">
        <div className="w-1/2 bg-white rounded-sm h-[50vh] p-5">
          <Link className="bg-green-500 px-4 py-2 rounded-md text-white text-xl align-middle">
            Add Student
          </Link>

          <div class="relative overflow-x-auto mt-4">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-900 uppercase bg-gray-500 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Students;
