import { useState } from 'react';
import './App.css';

function App() {
  const students = [
    { name: "Aiden Carter", level: 1, averageScore: 88 },
    { name: "Bella Thompson", level: 2, averageScore: 91 },
    { name: "Caleb Johnson", level: 3, averageScore: 84 },
    { name: "Daisy Nguyen", level: 3, averageScore: 93 },
    { name: "Ethan Wright", level: 1, averageScore: 76 },
    { name: "Fiona Lopez", level: 3, averageScore: 89 },
    { name: "Gavin Smith", level: 2, averageScore: 82 },
    { name: "Hannah Patel", level: 3, averageScore: 95 },
    { name: "Isaac Chen", level: 1, averageScore: 79 },
    { name: "Jasmine Rivera", level: 2, averageScore: 87 }
  ]; 

  const [data, setdata] = useState(students);


  function handleChange  (e: React.ChangeEvent<HTMLSelectElement>)  {
    const value = e.target.value;
   
    
    if (value === 'all') {
      setdata(students);
    } else {
      const level = parseInt(value);
      setdata(students.filter(student => student.level === level));
    }
  };

  return (
    <div>
      <h1>Students Overview</h1>
      <p>Filter by levels:</p>
      <select 
        name="level" 
        id="level"
       
        onChange={handleChange}
      >
        <option value="all">All Levels</option>
        <option value="1">Level 1</option>
        <option value="2">Level 2</option>
        <option value="3">Level 3</option>
      </select>
      
      <table>
       
        <thead>
          <tr>
            <th style={{width: '90%'}}>Name</th>
            <th style={{width: '20%'}}>Level</th>
            <th style={{width: '40%'}}>Average Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student) => (
            <tr key={student.name}>
              <td>{student.name}</td>
              <td>{student.level}</td>
              <td>{student.averageScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;