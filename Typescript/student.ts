class student {
	fullname:string;
	constructor(public firstname: string, public middleinitial: string, public lastname: string){
       this.fullname = firstname + " " + middleinitial + " " +lastname;
	}
}
interface person {
	firstname: string;
	lastname: string;
}

function greeter(person: person) {
	return "Hello, " + person.firstname + " " + person.lastname;

}
let user = new student("Jane", "M.", "user");
console.log(greeter(user));