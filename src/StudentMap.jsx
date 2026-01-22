const StudentMap = ({ students }) => {
    // console.log(students)
    return (
        <>
            {students.map((student) => (
                <div
                    className="itemList"
                    key={`${student.name}-${student.age}`}
                >
                    <p>
                        Hello {student.name}, you are {student.age} year old
                    </p>
                </div>
            ))}

        </>
    )
}

export default StudentMap