<template>
    <h1>Hello</h1>
    <div>
        <input v-model="newStudentName" placeholder="Student name" />
        <input v-model.number="newStudentGrade" type="number" placeholder="Initial Grade" />
        <button @click="addStudent">Add Student</button>
    </div>

    <ul>
        <li v-for="student in students" :key="student.id">
            Name: {{ student.name }}
            Course: {{ student.course }}
            Grade: {{ student.grade }}
            Letter Grade: {{ getLetterGrade(student.grade) }}
            <button @click="updateGrade(student.id)">Update Grade</button>
            <button @click="updateCourse(student.id)">Update Course</button>
        </li>
    </ul>

    <h2>Average Grade: {{ averageGrade }}</h2>
</template>



<script>
    export default {
        name: 'GradesApp',
        data() {
            return {
                students: [
                    {id: 1, name: 'John Doe', course: '', grade: 88},
                    {id: 2, name: 'Jane Williams', course: '', grade: 78},
                    {id: 3, name: 'Ashley Jones', course: '', grade: 65},
                    {id: 4, name: 'Ben Stevenson', course: '', grade: 69},
                ],
                newStudentName: '',
                newStudentGrade: 0,
                course: '',
            }

        },

        methods: {
            addStudent() {
                const newId = this.students.length +1;
                this.students.push({
                    id: newId,
                    name: this.newStudentName,
                    grade: Number(this.newStudentGrade),
                });
                this.newStudentName = '';
                this.newStudentsGrade = 0;
            },

            updateGrade(studentId) {
                const newGrade = prompt('Enter new grade');
                const student = this.students.find(s => s.id === studentId);
                if (student && !isNaN(newGrade)) {
                    student.grade = parseInt(newGrade, 10);
                }
            },

            updateCourse(studentId) {
                const course = prompt('Enter a course');
                const student = this.students.find(s => s.id === studentId);
                if(student && course) {
                    student.course = course;
                }
            },
            getLetterGrade(grade) {
                if (grade > 95) return 'A';
                else if (grade > 85) return 'B';
                else if (grade > 75) return 'C';
                else if (grade >= 65) return 'D';
                else return 'F';
            }
        },

        computed: {
            averageGrade() {
                if (!this.students.length) return 0;
                const total = this.students.reduce((acc, student) => acc + student.grade, 0);
                return (total / this.students.length).toFixed(2);
            },
        }
    }
</script>