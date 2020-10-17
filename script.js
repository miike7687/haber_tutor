$("#form-submit").click(function (event) {
  event.preventDefault();
  const parent = $("#inputContact").val();
  const parentEmail = $("#inputEmail").val();
  const student = $("#inputStudentName").val();
  const grade = $("#inputGrade").val();
  const city = $("#inputCity").val();
  const state = $("#inputState").val();
  const zip = $("#inputZip").val();
  const school = $("#inputSchool").val();
  const schoolCity = $("#inputSchoolCity").val();
  const form = document.getElementById("contactForm");

  if (
    !parent ||
    !parentEmail ||
    !student ||
    !grade ||
    !city ||
    !state ||
    !zip ||
    !school ||
    !schoolCity

    // (selectArray = [])
  ) {
    alert("You must fill out all required fields!");
  } else {
    console.log("This form was submitted!");
    console.log("Parent: " + parent);
    console.log("Parent Email: " + parentEmail);
    console.log("Student: " + student);
    console.log("Grade: " + grade);
    console.log("City: " + city);
    console.log("State: " + state);
    console.log("Zip: " + zip);
    console.log("School: " + school);
    console.log("School City: " + schoolCity);
    checkbox();
    alert("Thank you for submitting! Mr. Haber will get back to you soon!");
  }
});

function checkbox() {
  var myForm = document.getElementById("contactForm");
  var i;
  var selectArray = [];
  var otherInput = $("#inputOther").val();
  for (i = 0; i < myForm.subject.length; i++) {
    if (myForm.subject[i].type == "checkbox") {
      if (myForm.subject[i].checked == true) {
        if (myForm.subject[i].value !== "Other") {
          selectArray.push(myForm.subject[i].value);
        } else if (myForm.subject[i].value == "Other") {
          selectArray.push(otherInput);
        }
      }
    }
  }
  console.log(selectArray);
}
