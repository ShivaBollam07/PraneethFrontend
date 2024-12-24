import StatusIndicator from './StatusIndicator';

const Table = () => {
  const students = [
    { name: 'Anshuman Kashyap', cohort: 'AY 2024-25', courses: ['CBSE 9 Science', 'CBSE 9 Math'], joined: '17. Nov. 2024', login: '17. Nov. 2024 4:16 PM', status: 'green' },
    { name: 'Bansi Dadhaniya', cohort: 'AY 2024-25', courses: ['CBSE 9 Science', 'CBSE 9 Math'], joined: '17. Nov. 2024', login: '17. Nov. 2024 4:16 PM', status: 'red' },
    // Add more student data here
  ];

  return (
    <table className="w-full bg-white shadow rounded">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-4 text-left">Student Name</th>
          <th className="p-4 text-left">Cohort</th>
          <th className="p-4 text-left">Courses</th>
          <th className="p-4 text-left">Date Joined</th>
          <th className="p-4 text-left">Last Login</th>
          <th className="p-4 text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index} className="border-b">
            <td className="p-4">{student.name}</td>
            <td className="p-4">{student.cohort}</td>
            <td className="p-4 space-x-2">
              {student.courses.map((course, idx) => (
                <span key={idx} className="bg-gray-100 px-2 py-1 rounded">{course}</span>
              ))}
            </td>
            <td className="p-4">{student.joined}</td>
            <td className="p-4">{student.login}</td>
            <td className="p-4"><StatusIndicator status={student.status} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
