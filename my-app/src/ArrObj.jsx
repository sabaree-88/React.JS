import { useState } from "react";

function ArrObj() {

    const [student, setStudent] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [intrest, setIntrest] = useState('');

    function addStudent() {
        const test = {
            Sname: name,
            Sage: age,
            Sintrest: intrest
        }

        setStudent(student => [...student, test]);

        setName('');
        setAge(0);
        setIntrest('')
    }

    function changeName(event) {
        setName(event.target.value);
    }

    function changeAge(event) {
        setAge(event.target.value);
    }
    function changeIntrest(event) {
        setIntrest(event.target.value);
    }

    return (
        <>
            <ul>
                {student.map((element, index) =>
                    <li key={index}>
                        {element.Sname} {element.Sage} {element.Sintrest}
                    </li>)}
            </ul>

            <input type="text" value={name} onChange={changeName} placeholder="Enter name" /><br />
            <input type="number" value={age} onChange={changeAge} placeholder="Enter age" /><br />
            <input type="text" value={intrest} onChange={changeIntrest} placeholder="Enter intrest" /><br />
            <button onClick={() => addStudent()}>Add Student</button>
        </>
    );
}

export default ArrObj