import Student from "./Students";
export default function MainBody() {
  const course = "React JS";
  const totalLectures = 3;
  return (
    <div>
      <p>In this course, we will learn {course} js by building Taskopedia </p>
      <p>Total Lecture = {totalLectures}</p>
      <ul>
        <li>Basic Foundation</li>
        <li>Functional and Class Components</li>
      </ul>
      <div className="px-4">Students enrolled</div>
      <div className="container px-4  ">
        <Student fullname="srinivas" ProgrammingExp={2} />
        <Student fullname="Manoj" ProgrammingExp={5} />
        <Student fullname="Siva" ProgrammingExp={4} />
      </div>
    </div>
  );
}
