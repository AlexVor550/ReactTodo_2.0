export default function getTask(){
    return localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')): []
}