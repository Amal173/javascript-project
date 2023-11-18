// ----------------function for show addEmployee Form--------------------
function addEmployee() {
  const AddEmployeeForm = document.getElementById("AddEmployeeForm");
  AddEmployeeForm.style.visibility = "visible";
  const overLay = document.getElementById("overLay");
  overLay.style.visibility = "visible";
  // const ThreeDotResponsebun = document.getElementById('ThreeDotResponsebun');
  // ThreeDotResponsebun.style.visibility = 'hidden';
}
// ----------------function for hide-- addEmployee Form--------------------

function CloseAddEmployee() {
  const removeAddEmployee = document.getElementById("AddEmployeeForm");
  removeAddEmployee.style.visibility = "hidden";
  const overLay = document.getElementById("overLay");
  overLay.style.visibility = "hidden";

  clearForm();
}

//----------- function to popup--modal---after  successfull --deletion -----------------
function successDeleteModal() {
  const successDeleteModal = document.getElementById("successDeleteModal");
  successDeleteModal.style.display = "block";
  const overLay = document.getElementById("overLay");
  overLay.style.visibility = "visible";
}

//------------ function to close popup modal after successfull deletion -----------------

function closeSuccessDeleteModal() {
  const successDeleteModal = document.getElementById("successDeleteModal");
  successDeleteModal.style.display = "none";
  const overLay = document.getElementById("overLay");
  overLay.style.visibility = "hidden";
}

//------------function to popup modal after successfull added an Employee-----------------

function employyeeCreatedTrue() {
  const employyeeCreatedTrue = document.getElementById("employyeeCreatedTrue");
  employyeeCreatedTrue.style.display = "block";
  const overLay = document.getElementById("overLay");
  overLay.style.visibility = "visible";
}
//------------function to close popup modal after successfull added an Employee-----------------

function closeEmployyeeCreatedTrue() {
  const employyeeCreatedTrue = document.getElementById("employyeeCreatedTrue");
  employyeeCreatedTrue.style.display = "none";
  const overLay = document.getElementById("overLay");
  overLay.style.visibility = "hidden";
}

//------------ function to popup modal after successfull edited an Employee-----------------

function employyeeEdittedModal() {
  const employyeeEdittedModal = document.getElementById(
    "employyeeEdittedModal"
  );
  employyeeEdittedModal.style.display = "block";
  const overLay = document.getElementById("overLay");
  overLay.style.visibility = "visible";
}

//------------function close popup modal after successfull edited an Employee-----------------

function closeEmployyeeEdittedModal() {
  const employyeeEdittedModal = document.getElementById(
    "employyeeEdittedModal"
  );
  employyeeEdittedModal.style.display = "none";
  const overLay = document.getElementById("overLay");
  overLay.style.visibility = "hidden";
  location.reload();
}
//------------function to show edit employeee form-----------------

function EditEmployee(emploID) {
  const EditEmployeeForm = document.getElementById("EditEmployeeForm");
  EditEmployeeForm.style.visibility = "visible";
  const overLay = document.getElementById("overLay");
  overLay.style.visibility = "visible";
  const ThreeDotResponsebun = document.getElementById("ThreeDotResponsebun");
  ThreeDotResponsebun.style.visibility = "hidden";

  fetch(`http://localhost:3000/employees/${emploID}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const editEmployeeProfilePic = document.getElementById(
        "editedEmployeeProfilePic"
      );
      editEmployeeProfilePic.src = `http://localhost:3000/employees/${emploID}/avatar`;
      document.getElementById("editSalutation").value = data.salutation;
      document.getElementById("editFirstName").value = data.firstName;
      document.getElementById("editLastName").value = data.lastName;
      document.getElementById("editEmail").value = data.email;
      document.getElementById("editPhone").value = data.phone;
      const dobvalue = data.dob;
      const [day, month, year] = dobvalue.split("-");
      const formattedob = `${year}-${month}-${day}`;
      document.getElementById("Editdob").value = formattedob;
      document.querySelector(
        `input[name="editGender"][value="${data.gender}"]`
      ).checked = true;
      document.getElementById("editQualifications").value = data.qualifications;
      document.getElementById("editAddress").value = data.address;
      document.getElementById("editCountry").value = data.country;
      document.getElementById("editState").value = data.state;
      document.getElementById("editCity").value = data.city;
      document.getElementById("editPin").value = data.pin;
    });
  const editEmlo = document.getElementById("SaveEditEmployee");
  editEmlo.addEventListener("click", (e) => {
    e.preventDefault();
    editEmployeeData(emploID);
    CloseEditEmployee();
  });
}
//------------function to close edit employeee form-----------------

function CloseEditEmployee() {
  const EditEmployeeForm = document.getElementById("EditEmployeeForm");
  EditEmployeeForm.style.visibility = "hidden";
  const overLay = document.getElementById("overLay");
  overLay.style.visibility = "hidden";
}

//-------function to show the menu------
function ThreeDotResponsebutton(emploID) {
  console.log(emploID);
  const ThreeDotList = document.getElementById("ThreeDotList");
  let temp = " ";
  temp = `
<div class="ThreeDotResponsebun" id="ThreeDotResponsebun">
<a href="viewEmployee.html?id=${emploID}"><div class="ViewDetails" id="viewDetails">
<i class="fa-regular fa-eye"></i>
<span>View Details</span>
</div></a>

<div class="EditBtn" id="EditBtn" onclick="EditEmployee('${emploID}')">
    <i class="fa-solid fa-pencil"></i>
    <span>Edit </span>
</div>
<div class="Delete" onclick="DeleteWarningModal('${emploID}')">
    <i class="fa-regular fa-trash-can"></i>
    <span>Delete </span>
    
</div>

</div>
<div id="modal"></div> `;
  ThreeDotList.innerHTML = temp;

  const ThreeDotResponsebun = document.getElementById("ThreeDotResponsebun");
  ThreeDotResponsebun.style.zIndex = "1";

  const moreOptionToggles = document.querySelectorAll("#ThreeDotButton");
  moreOptionToggles.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const buttonRect = btn.getBoundingClientRect();
      const ThreeDotResponsebun = document.getElementById(
        "ThreeDotResponsebun"
      );
      ThreeDotResponsebun.style.top = buttonRect.top - -40 + "px";
      ThreeDotResponsebun.style.visibility =
        ThreeDotResponsebun.style.visibility === "hidden" ||
        ThreeDotResponsebun.style.visibility === ""
          ? "visible"
          : "hidden";
      event.stopPropagation();
    });
  });

  // Function to close the menu
  function closeMenu() {
    ThreeDotResponsebun.style.visibility = "hidden";
    document.removeEventListener("mousedown", handleOutsideClick);
  }
  //------------- Function to handle click outside the menu-------------------
  function handleOutsideClick(event) {
    if (!ThreeDotResponsebun.contains(event.target)) {
      closeMenu();
    }
  }
  document.addEventListener("mousedown", handleOutsideClick);
}
//--------function to show the warning for the delete employee------

function DeleteWarningModal(emploID) {
  console.log(emploID);
  const DeleteWarningModal = document.getElementById("DeleteWarningModal");
  DeleteWarningModal.style.visibility = "visible";
  const overLay = document.getElementById("overLay");
  overLay.style.visibility = "visible";
  const ThreeDotResponsebun = document.getElementById("ThreeDotResponsebun");
  ThreeDotResponsebun.style.visibility = "hidden";
  const deletebtn = document.getElementById("DeleteModal");
  deletebtn.addEventListener("click", () => {
    deleteEmployee(emploID);
  });
}

//--------function to close the warning for the delete employee------

function CloseDeleteWarningModal() {
  const DeleteWarningModal = document.getElementById("DeleteWarningModal");
  DeleteWarningModal.style.visibility = "hidden";
  // const overLay = document.getElementById('overLay');
  // overLay.style.visibility = 'hidden';
}

// --------------------------------------GET method-------------------------------

getEmployee();
function getEmployee() {
  fetch(`http://localhost:3000/employees`)
    .then((res) => {
      return res.json();
    })
    .then((employee) => {
      const tableBody = document.getElementById("tableBody");
      let temp = "";
      const datasPerPage = document.getElementById("datasPerPage");
      datasPerPage.addEventListener("click", getEmployee);
      const maxCountOnPage = datasPerPage.value; //its the number if data to be displayed on the page
      const TotalNoOfDatas = document.getElementById("TotalNoOfDatas");
      TotalNoOfDatas.innerHTML = `of ${employee.length}`;
      const totalPages = Math.ceil(employee.length / maxCountOnPage); //finding the total pages as per the data
      pagination(totalPages); //returning the value to pagination function
      const start = maxCountOnPage * (CurrentPage - 1);
      const end = Math.min(maxCountOnPage * CurrentPage, employee.length);
      for (var i = start; i < end; i++) {
        const employees = employee[i];
        temp += `<tr id="id">
              
               <div id="TableData">
               <hr>
               <div id="EmployeeData">
                
               <div class="select Data">
                   <td>#0${i + 1}</td>
               </div>
               <div class="select Data">
                   <td><img src="http://localhost:3000/employees/${
                     employees.id
                   }/avatar">
                   ${employees.salutation}
  
                   ${employees.firstName}

                    ${employees.lastName}
                   </td>
               </div>
               <div class="select Data">
                   <td>${employees.email}</td>
               </div>
               <div class="select Data">
                   <td>${employees.phone}</td>
               </div>
               <div class="select Data">
                   <td>${employees.gender}</td>
               </div>
               <div class="select Data">
                   <td>${employees.dob}</td>
               </div>
               <div class="select Data">
                   <td>${employees.country}</td>
               </div>
               <div class="select ThreeDot" id="ThreeDotButton" onclick="ThreeDotResponsebutton('${
                 employees.id
               }')">
                   <td><i class="fa-solid fa-ellipsis"></i></td>
               </div>
               <div id="ThreeDotList"></div>
           </div></div>
           <div id="EmployeeNotFound" style="display:none;">Employee Not Found</div>
                        </tr>`;
      }
      tableBody.innerHTML = temp;
    });
}

// -----------------------------End---------GET method-------------------------------

// -------------------------------------POST method-------------------------------

async function PostMethod() {
  const salutation = document.getElementById("salutation").value;
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const dob = document.getElementById("dob").value;
  const pin = document.getElementById("pin").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;

  // Function for converting the format of date from yyyy-mm-dd to dd-mm-yyyy
  var dateofbirth = changeformatDMY(dob);
  function changeformatDMY(val) {
    const Array = val.split("-");
    let year = Array[0];
    let month = Array[1];
    let day = Array[2];
    let formatteddate = day + "-" + month + "-" + year;
    return formatteddate;
  }

  const qualifications = document.getElementById("qualifications").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const phone = document.getElementById("phone").value;
  const country = document.getElementById("country").value;

  const EmployeesData = {
    salutation,
    firstName,
    lastName,
    email,
    dob,
    pin,
    qualifications,
    address,
    city,
    gender,
    dob: dateofbirth,
    state,
    phone,
    country,
    password: phone,
    username: firstName,
  };

  console.log(EmployeesData);

  // Send the main form data
  await fetch("http://localhost:3000/employees", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(EmployeesData),
  })
    .then((response) => response.json())
    .then(async (data) => {
      console.log("Employee added:", data);

      // Image upload
      const uploadImageInput = document.getElementById("uploadImageInput");
      const formData = new FormData();
      formData.append("avatar", uploadImageInput.files[0]);

      await fetch(`http://localhost:3000/employees/${data.id}/avatar`, {
        method: "POST",
        body: formData,
      })
        .then((res) => {
          console.log("Image uploaded:", res);

          getEmployee();
        })

        .catch((error) => {
          console.error("Error uploading image:", error);
        });
    })
    .catch((error) => {
      console.error("Error adding employee:", error);
    });
  //getEmployee();
  CloseAddEmployee();
  clearForm();
  employyeeCreatedTrue();
}

// -----------------------------End--------POST method-------------------------------
// -------------------------------------DELETE method-------------------------------

function deleteEmployee(emploID) {
  console.log(emploID);
  fetch(`http://localhost:3000/employees/${emploID}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("API Response:", data);
      getEmployee();
      // location.reload();
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  CloseDeleteWarningModal();
}

// -----------------------------End--------DELETE method-------------------------------
// -------------------------------------PUT method-------------------------------
async function editEmployeeData(emploID) {
  const salutation = document.getElementById("editSalutation").value;
  const firstName = document.getElementById("editFirstName").value;
  const lastName = document.getElementById("editLastName").value;
  const email = document.getElementById("editEmail").value;
  const dob = document.getElementById("Editdob").value;
  const gender = document.querySelector(
    'input[name="editGender"]:checked'
  ).value;
  // Function for converting the format of date from yyyy-mm-dd to dd-mm-yyyy
  var dateofbirth = changeformat(dob);
  function changeformat(val) {
    const Array = val.split("-");
    let year = Array[0];
    let month = Array[1];
    let day = Array[2];
    let formatteddate = day + "-" + month + "-" + year;
    return formatteddate;
  }

  const qualifications = document.getElementById("editQualifications").value;
  const address = document.getElementById("editAddress").value;
  const city = document.getElementById("editCity").value;
  const state = document.getElementById("editState").value;
  const phone = document.getElementById("editPhone").value;
  const country = document.getElementById("editCountry").value;
  const pin = document.getElementById("editPin").value;

  const EmployeesData = {
    salutation,
    firstName,
    lastName,
    email,
    dob,
    pin,
    qualifications,
    address,
    city,
    gender,
    dob: dateofbirth,
    state,
    phone,
    country,
    password: phone,
    username: firstName,
  };
  await fetch(`http://localhost:3000/employees/${emploID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(EmployeesData),
  }).then((response) => {
    return response.json();
  });

  const editImageInput = document.getElementById("editImageInput");
  const formData = new FormData();
  formData.append("avatar", editImageInput.files[0]);

  await fetch(`http://localhost:3000/employees/${emploID}/avatar`, {
    method: "POST",
    body: formData,
  })
    .then((data) => {
      console.log(data);
      getEmployee();
      CloseAddEmployee();
      employyeeEdittedModal();
    })
    .catch((error) => {
      console.log(error - "error");
    });
}

// -----------------------------End--------PUT method-------------------------------
// ------------------------------------FORM VALIDATION-------------------------------
function EmailValidation(email) {
  const emailValidation = /^[^\s@]+@[^s@]+\.[^\s@]+$/;
  return emailValidation.test(email);
}
function phoneValidation(phone) {
  const phoneValidation = /^\d{10}$/;
  return phoneValidation.test(phone);
}
function firstNameValidation(name) {
  const firstNameRegex = /^[A-Za-z-']{2,30}$/;
  return firstNameRegex.test(name);
}
function lastNameValidation(name) {
  const LastNameRegex = /^[A-Za-z-']{1,30}$/;
  return LastNameRegex.test(name);
}
function validation() {
  console.log("hai");
  const salutation = document.getElementById("salutation");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const genderRadio = document.querySelector('input[name="gender"]:checked');
  const dob = document.getElementById("dob");
  const qualifications = document.getElementById("qualifications");
  const address = document.getElementById("address");
  const country = document.getElementById("country");
  const state = document.getElementById("state");
  const city = document.getElementById("city");
  const pin = document.getElementById("pin");
  const uploadImageInput = document.getElementById("uploadImageInput");

  var count = 0;
  if (
    salutation.value.trim() == "" ||
    salutation.value.trim() == null ||
    salutation.value.trim() == "select"
  ) {
    count++;
    const salutationInputWarning = document.getElementById(
      "salutationInputWarning"
    );
    salutationInputWarning.style.display = "block";
    const salutationExclamationIcon = document.getElementById(
      "salutationExclamationIcon"
    );
    salutationExclamationIcon.style.display = "block";
    salutation.style.border = "1px solid red";
  } else {
    const salutationInputWarning = document.getElementById(
      "salutationInputWarning"
    );
    salutationInputWarning.style.display = "none";
    const salutationExclamationIcon = document.getElementById(
      "salutationExclamationIcon"
    );
    salutationExclamationIcon.style.display = "none";
    salutation.style.border = "1px solid #009900";
  }
  if (
    firstName.value.trim() == "" ||
    firstName.value.trim() == null ||
    !firstNameValidation(firstName.value)
  ) {
    const firstNameInputWarning = document.getElementById(
      "firstNameInputWarning"
    );
    firstNameInputWarning.style.display = "block";
    const firstNameexclamationIcon = document.getElementById(
      "firstNameexclamationIcon"
    );
    firstNameexclamationIcon.style.display = "block";
    firstName.style.border = "1px solid red";
    count++;
  } else {
    const firstNameInputWarning = document.getElementById(
      "firstNameInputWarning"
    );
    firstNameInputWarning.style.display = "none";
    const firstNameexclamationIcon = document.getElementById(
      "firstNameexclamationIcon"
    );
    firstNameexclamationIcon.style.display = "none";
    firstName.style.border = "1px solid #009900";
  }
  if (
    lastName.value.trim() == "" ||
    lastName.value.trim() == null ||
    !lastNameValidation(lastName.value)
  ) {
    const lastNameInputWarning = document.getElementById(
      "lastNameInputWarning"
    );
    lastNameInputWarning.style.display = "block";
    const lastNameexclamationIcon = document.getElementById(
      "lastNameexclamationIcon"
    );
    lastNameexclamationIcon.style.display = "block";
    lastName.style.border = "1px solid red";
    count++;
  } else {
    const lastNameInputWarning = document.getElementById(
      "lastNameInputWarning"
    );
    lastNameInputWarning.style.display = "none";
    const lastNameexclamationIcon = document.getElementById(
      "lastNameexclamationIcon"
    );
    lastNameexclamationIcon.style.display = "none";
    lastName.style.border = "1px solid #009900";
  }
  if (
    email.value.trim() == "" ||
    email.value.trim() == null ||
    !EmailValidation(email.value)
  ) {
    const emailInputWarning = document.getElementById("emailInputWarning");
    emailInputWarning.style.display = "block";
    const emailexclamationIcon = document.getElementById(
      "emailexclamationIcon"
    );
    emailexclamationIcon.style.display = "block";
    email.style.border = "1px solid red";
    count++;
  } else {
    const emailInputWarning = document.getElementById("emailInputWarning");
    emailInputWarning.style.display = "none";
    const emailexclamationIcon = document.getElementById(
      "emailexclamationIcon"
    );
    emailexclamationIcon.style.display = "none";
    email.style.border = "1px solid #009900";
  }
  if (
    phone.value.trim() == "" ||
    phone.value.trim() == null ||
    phone.value.trim().length !== 10 ||
    !phoneValidation(phone.value)
  ) {
    const phoneInputWarning = document.getElementById("phoneInputWarning");
    phoneInputWarning.style.display = "block";
    const phoneexclamationIcon = document.getElementById(
      "phoneexclamationIcon"
    );
    phoneexclamationIcon.style.display = "block";
    phone.style.border = "1px solid red";
    count++;
  } else {
    const phoneInputWarning = document.getElementById("phoneInputWarning");
    phoneInputWarning.style.display = "none";
    const phoneexclamationIcon = document.getElementById(
      "phoneexclamationIcon"
    );
    phoneexclamationIcon.style.display = "none";
    phone.style.border = "1px solid #009900";
  }
  if (dob.value.trim() == "" || dob.value.trim() == null) {
    const dobInputWarning = document.getElementById("dobInputWarning");
    dobInputWarning.style.display = "block";
    const dobexclamationIcon = document.getElementById("dobexclamationIcon");
    dobexclamationIcon.style.display = "block";
    dob.style.border = "1px solid red";
    count++;
  } else {
    const dobInputWarning = document.getElementById("dobInputWarning");
    dobInputWarning.style.display = "none";
    const dobexclamationIcon = document.getElementById("dobexclamationIcon");
    dobexclamationIcon.style.display = "none";
    dob.style.border = "1px solid #009900";
  }

  if (!genderRadio) {
    const genderInputWarning = document.getElementById("genderInputWarning");
    genderInputWarning.style.display = "block";
    count++;
  } else {
    const genderInputWarning = document.getElementById("genderInputWarning");
    genderInputWarning.style.display = "none";
  }
  if (
    qualifications.value.trim() == "" ||
    qualifications.value.trim() == null
  ) {
    const qualificationsInputWarning = document.getElementById(
      "qualificationsInputWarning"
    );
    qualificationsInputWarning.style.display = "block";
    const qualificationsexclamationIcon = document.getElementById(
      "qualificationsexclamationIcon"
    );
    qualificationsexclamationIcon.style.display = "block";
    qualifications.style.border = "1px solid red";
    count++;
  } else {
    const qualificationsInputWarning = document.getElementById(
      "qualificationsInputWarning"
    );
    qualificationsInputWarning.style.display = "none";
    const qualificationsexclamationIcon = document.getElementById(
      "qualificationsexclamationIcon"
    );
    qualificationsexclamationIcon.style.display = "none";
    qualifications.style.border = "1px solid #009900";
  }
  if (address.value.trim() == "" || address.value.trim() == null) {
    const addressInputWarning = document.getElementById("addressInputWarning");
    addressInputWarning.style.display = "block";
    const addressexclamationIcon = document.getElementById(
      "addressexclamationIcon"
    );
    addressexclamationIcon.style.display = "block";
    address.style.border = "1px solid red";
    count++;
  } else {
    const addressInputWarning = document.getElementById("addressInputWarning");
    addressInputWarning.style.display = "none";
    const addressexclamationIcon = document.getElementById(
      "addressexclamationIcon"
    );
    addressexclamationIcon.style.display = "none";
    address.style.border = "1px solid #009900";
  }
  if (
    country.value.trim() == "" ||
    country.value.trim() == null ||
    country.value.trim() == "select country"
  ) {
    const countryInputWarning = document.getElementById("countryInputWarning");
    countryInputWarning.style.display = "block";
    const countryexclamationIcon = document.getElementById(
      "countryexclamationIcon"
    );
    countryexclamationIcon.style.display = "block";
    country.style.border = "1px solid red";
    count++;
  } else {
    const countryInputWarning = document.getElementById("countryInputWarning");
    countryInputWarning.style.display = "none";
    const countryexclamationIcon = document.getElementById(
      "countryexclamationIcon"
    );
    countryexclamationIcon.style.display = "none";
    country.style.border = "1px solid #009900";
  }
  if (
    state.value.trim() == "" ||
    state.value.trim() == null ||
    state.value.trim() == "select state"
  ) {
    const stateInputWarning = document.getElementById("stateInputWarning");
    stateInputWarning.style.display = "block";
    const stateexclamationIcon = document.getElementById(
      "stateexclamationIcon"
    );
    stateexclamationIcon.style.display = "block";
    state.style.border = "1px solid red";
    count++;
  } else {
    const stateInputWarning = document.getElementById("stateInputWarning");
    stateInputWarning.style.display = "none";
    const stateexclamationIcon = document.getElementById(
      "stateexclamationIcon"
    );
    stateexclamationIcon.style.display = "none";
    state.style.border = "1px solid #009900";
  }
  if (city.value.trim() == "" || city.value.trim() == null) {
    const cityInputWarning = document.getElementById("cityInputWarning");
    cityInputWarning.style.display = "block";
    const cityexclamationIcon = document.getElementById("cityexclamationIcon");
    cityexclamationIcon.style.display = "block";
    city.style.border = "1px solid red";
    count++;
  } else {
    const cityInputWarning = document.getElementById("cityInputWarning");
    cityInputWarning.style.display = "none";
    const cityexclamationIcon = document.getElementById("cityexclamationIcon");
    cityexclamationIcon.style.display = "none";
    city.style.border = "1px solid #009900";
  }
  if (
    pin.value.trim() == "" ||
    pin.value.trim() == null ||
    pin.value.trim().length !== 6
  ) {
    const pinInputWarning = document.getElementById("pinInputWarning");
    pinInputWarning.style.display = "block";
    const pinexclamationIcon = document.getElementById("pinexclamationIcon");
    pinexclamationIcon.style.display = "block";
    pin.style.border = "1px solid red";
    count++;
  } else {
    const pinInputWarning = document.getElementById("pinInputWarning");
    pinInputWarning.style.display = "none";
    const pinexclamationIcon = document.getElementById("pinexclamationIcon");
    pinexclamationIcon.style.display = "none";
    pin.style.border = "1px solid #009900";
  }

  if (uploadImageInput.files.length === 0) {
    const uploadingWarning = document.getElementById("uploadingWarning");
    uploadingWarning.style.display = "block";
    count++;
    // Now you can work with the 'avatar' file.
  }

  if (count == 0) {
    PostMethod();
  }
}

// -----------------------------End--------FORM VALIDATION-------------------------------

// -------------------------------------IMAGE-UPLOAD-------------------------------
let image = document.getElementById("image");
let uploadImageInput = document.getElementById("uploadImageInput");
const imgSection = document.getElementById("imgSection");
const uploadSection = document.getElementById("upload-section");
uploadImageInput.onchange = function () {
  image.src = URL.createObjectURL(uploadImageInput.files[0]);
  imgSection.style.display = "none";
  uploadSection.style.backgroundImage = "unset";
  uploadSection.style.backgroundColor = "unset";
};

let editedImage = document.getElementById("editedEmployeeProfilePic");
let editImageInput = document.getElementById("editImageInput");
editImageInput.onchange = function () {
  editedImage.src = URL.createObjectURL(editImageInput.files[0]);
};
// ------------------------------END-------IMAGE-UPLOAD-------------------------------

// -------------------------------------SEARCH-EMPLOYEE-------------------------------

function SearchEmployee() {
  let searchValue = document.getElementById("searchEmployee").value;
  searchValue = searchValue.toLowerCase();
  tableBody = document.getElementById("tableBody");
  let rows = tableBody.querySelectorAll("#TableData");
  console.log(rows.length);
  const EmployeeNotFound = document.getElementById("EmployeeNotFound");
  let foundEmployee = false;
  for (let i = 0; i < rows.length; i++) {
    if (!rows[i].innerHTML.toLowerCase().includes(searchValue)) {
      rows[i].style.display = "none";
    } else {
      rows[i].style.display = "";
      foundEmployee = true;
    }
  }
  if (foundEmployee) {
    EmployeeNotFound.style.display = "none";
  } else {
    EmployeeNotFound.style.display = "block";
  }
}

// -----------------------------End--------SEARCH-EMPLOYEE-------------------------------

// ------------pagination ----------

var CurrentPage = 1;

function pagination(totalPages) {
  var pageNum = document.getElementById("showCurrentPage");
  let temp = "";

  for (let i = 1; i <= totalPages; i++) {
    temp += `<button id="page${i}">${i}</button>`;
  }

  pageNum.innerHTML = temp;

  pageNum.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
      const pageNumber = parseInt(e.target.textContent);
      if (!isNaN(pageNumber)) {
        CurrentPage = pageNumber;
        getEmployee();
      }
    }
  });

  var pageLeftButton = document.getElementById("pageLeft");
  var pageRightButton = document.getElementById("pageright");

  if (CurrentPage === 1) {
    pageLeftButton.classList.add("hidden");
  } else {
    pageLeftButton.classList.remove("hidden");
  }

  if (CurrentPage === totalPages) {
    pageRightButton.classList.add("hidden");
  } else {
    pageRightButton.classList.remove("hidden");
  }

  pageLeftButton.addEventListener("click", function () {
    if (CurrentPage > 1) {
      CurrentPage--;
      getEmployee();
    }
  });

  pageRightButton.addEventListener("click", function () {
    if (CurrentPage < totalPages) {
      CurrentPage++;
      getEmployee();
    }
  });
  const activePaginationButton = document.getElementById(`page${CurrentPage}`);
  activePaginationButton.classList.add("active");
}

//end of pagination

// ------function for clear the form input datas--------
function clearForm() {
  salutation.style.border = "1px solid #B6BBC7";
  firstName.style.border = "1px solid #B6BBC7";
  lastName.style.border = "1px solid #B6BBC7";
  email.style.border = "1px solid #B6BBC7";
  phone.style.border = "1px solid #B6BBC7";
  dob.style.border = "1px solid #B6BBC7";
  qualifications.style.border = "1px solid #B6BBC7";
  address.style.border = "1px solid #B6BBC7";
  country.style.border = "1px solid #B6BBC7";
  state.style.border = "1px solid #B6BBC7";
  city.style.border = "1px solid #B6BBC7";
  pin.style.border = "1px solid #B6BBC7";
  const AddEmployeeform = document.getElementById("AddEmployeeform");
  const imgupload = document.getElementById("uploadImageInput").form;
  imgupload.reset();
  image.src = " ";
  AddEmployeeform.reset();
  imgSection.style.display = "flex";
  uploadSection.style.backgroundImage = `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='13' ry='13' stroke='%23B2BAD0FF' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`;
  uploadSection.style.backgroundColor = "#FAFCFE";
}
