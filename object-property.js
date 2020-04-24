
const students = [
{id: 21, name: "manna"},
{id: 31, name: "Moyouri"},
{id: 41, name: "jamal"},
{id: 51, name: "DeepJol"}

];
const allname = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    const result = element.name;
    allname.push(result);
    
}
const name = students.map(s => s.name);
const ids = students.map(s =>s.id);
const bigger = students.filter(m => m.id>21);
const biggerone = students.find(m => m.id < 51);
console.log(allname);