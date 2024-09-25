import { FunctionComponent, useEffect, useState } from "react";

interface GradesProps {
    grade: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

const Grades: FunctionComponent<GradesProps> = () => {
    const [grade, setGrade] = useState(0);

    const increment = () => {
        setGrade(prevGrade => prevGrade + 1);
    };

    const decrement = () => {
        setGrade(prevGrade => prevGrade - 1);
    };

    useEffect(() => {
        console.log("Grade changed to:", grade);
    }, [grade]); 

    return (
        <>
            <h5 className="mt-5 mb-5">Grade: {grade}</h5>

            <div className="d-grid gap-2 d-md-flex justify-content-sm-center">
                <button className="btn btn-primary inc-dec me-md-2" onClick={increment} type="button">
                    Inc
                </button>
                <button className="btn btn-primary inc-dec" onClick={decrement} type="button">
                    Dec
                </button>
            </div>
        </>
    );
};

export default Grades;
