import React, { FunctionComponent } from "react";
import Grades from './Grades';

interface Course {
    number: number;
    courseName: string;
    semester: string;
}

const courses: Course[] = [
    { number: 292100, courseName: "Java 1", semester: "A" },
    { number: 292101, courseName: "Java 2", semester: "B" },
    { number: 292102, courseName: "Python", semester: "A" },
    { number: 292103, courseName: "Angular 1", semester: "B" },
    { number: 292104, courseName: "Angular 2", semester: "A" },
    { number: 292105, courseName: "React", semester: "B" },
    { number: 292106, courseName: "MongoDB", semester: "B" },
    { number: 292107, courseName: "SQL", semester: "A" }
];

const youClicked = (courseName: string) => {
    alert(`Course name is: ${courseName}`);
};

const Courses: FunctionComponent = () => {
function increment(event: React.MouseEvent<HTMLButtonElement>): void {
    throw new Error("Function not implemented.");
}

function decrement(event: React.MouseEvent<HTMLButtonElement>): void {
    throw new Error("Function not implemented.");
}

    return (
        <>
            <h3>Courses</h3>
            <div className="row">
                {courses.length > 0 ? (
                    courses.map(course => (
                        <div className="col-sm-6 mb-3 mb-sm-0" key={course.number}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{course.number}</h5>
                                    <p className="card-text">Semester: {course.semester}</p>        
                                    <button
                                        type="button"
                                        className="btn btn-info mt-3"
                                        onClick={() => youClicked(course.courseName)}
                                    >
                                        Click Me
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>אין קורסים פעילים.</p>
                )}
            </div>
        </>
    );
};

export default Courses;
