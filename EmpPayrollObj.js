const save = () => {
    try {
        let EmployeePayrollData=createEmployeePayroll();
    }catch (e) {

    }
}
const createEmployeePayroll = () => {
    let EmployeePayrollData =new EmployeePayrollData();
    try {
        EmployeePayrollData.name =getInputValueById {'#name'};
    }catch (e) {
        settextValue('.text-error',e);
        throw e;
    }
    EmployeePayrollData.profilePic=getSelectedValues('[name=Profile]').pop();
    EmployeePayrollData.gender =getSelectedValues('[name=gender]').pop();
    EmployeePayrollData.department=getSelectedValues('[name=department]');
    EmployeePayrollData.salary=getInputValueById('#salary');
    EmployeePayrollData.note=getInputValueById('#note');
    let date=getInputValueById('#day')+" "+getInputValueById('month')+" "+ getInputValueById('#year');
    EmployeePayrollData.date=Date.parse(date);
    alert(EmployeePayrollData.tostring());
    return EmployeePayrollData;
}
const getInputElementValue=(id) =>{
    let value =document.getElementById(id).value;
    return value;
}