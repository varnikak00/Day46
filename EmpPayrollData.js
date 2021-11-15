class new_EmpPayroll {
    get gender() { return this._gender; }
    set gender(gender) {
        this._gender =gender;
    }
   
   get Name() { return this._Name; }
   set Name(Name) {
       let nameRegex = RegExp('^[A-Z]{1}[a-z]{5,}$');
       if (nameRegex.test(Name))
       this._Name =Name;
       else throw 'Name is Incorrect';
   }
     
   
   get department() { return this.department;}
   set department(department) {
       this.department =department;
   }
    
   get salary() { return this.salary;}
   set salary(salary) {
       this.salary =salary;
   }
   get note() { return this.note;}
   set note(note) {
       this.note =note;
   }
   get startDate() { return this.startDate;}
   set startDate(startDate) {
       this.startDate =startDate;
   }

    //method 
    toString() {
        const options = {year:'numeric',month:'long',day:'numeric' };
        const newDate = !this.startDate ? "undefined":
                  this.startDate.toLocaleDateString("en-US",options);
        return "id=" +this.id + ", name'" + this.Name + ",department=" + this.department + ", salary'" + this.salary + ", "+
                               "gender=" + this.gender +",startDate=" +newDate;
    }
}