 let checkBoxContainer = document.getElementById("checkboxWithLabelContainer");
 checkBoxContainer.classList.add("text-center", "mt-5");

 let checkBoxEl = document.createElement("input");
 checkBoxEl.type = "checkbox";
 checkBoxEl.id = "checkbox";
 checkBoxContainer.appendChild(checkBoxEl);

 let labelEl = document.createElement("label");
 labelEl.setAttribute("for", "checkbox");
 labelEl.textContent = "Hey please complete me!!";
 checkBoxContainer.appendChild(labelEl);
