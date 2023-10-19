
function resetForm() {
    document.getElementById("survey-form").reset();
}

function submitForm() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const dob = document.getElementById("date-of-birth").value;
    const country = document.getElementById("country").value;
    const gender = Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(input => input.value);
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobileNumber = document.getElementById("mobile-number").value;

    const popupContent = `
<p><strong>First Name:</strong> ${firstName}</p>
<p><strong>Last Name:</strong> ${lastName}</p>
<p><strong>Date of Birth:</strong> ${dob}</p>
<p><strong>Country:</strong> ${country}</p>
<p><strong>Gender:</strong> ${gender.join(", ")}</p>
<p><strong>Profession:</strong> ${profession}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Mobile Number:</strong> ${mobileNumber}</p>
`;

    // Create and display a popup with the form data
    const popup = window.open("", "Form Data", "width=400, height=400");
    popup.document.write(popupContent);
}
