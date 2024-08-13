import getListStudents from './0-get_list_students';
import getStudentsIdsSum from './3-get_ids_sum';

const students = getListStudents();
const value = getStudentsIdsSum(students);

console.log(value);
