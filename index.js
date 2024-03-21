 function Student(name,id,dept,cgpa)
 { 
  this.name= name;
  this.id= id;
  this.dept= dept;
  this.cgpa= cgpa;

  this.display = function ()
  {
    document.write(this.name +"</br>");
    document.write(this.id+"</br>");
    document.write(this.dept+"</br>");
    document.write(this.cgpa+"</br>");
  }
 }
 var student1= new Student("Zahid",634,"CSE",3.46);
 var student2= new Student("Eva",525,"ELL",3.75);
 var student3= new Student("Humayra",602,"ELL",3.46);

  student1.display();


