/* eslint-disable jsx-a11y/alt-text */
import {faker} from "@faker-js/faker";
function Student(props) {
  return (
    <div className="col-4 p-1">
      <div className="row boarder">
        <div className="col-2">
          <img src={faker.image.avatar()} className="w-100"></img>
        </div>
        <div className="col-10">
          {props.fullname} <br />
          Coding Experience {props.ProgrammingExp} years
        </div>
      </div>
    </div>
  );
}

export default Student;
