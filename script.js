 function addStaff() {
            // Get form values
            var name = document.getElementById('name').value;
            var qualification = document.getElementById('qualification').value;
            var role = document.getElementById('role').value;
            var contact = document.getElementById('contact').value;

            // Create a new row
            var newRow = document.createElement('tr');

            // Add data cells
            newRow.innerHTML = `
                <td>${name}</td>
                <td>${qualification}</td>
                <td>${role}</td>
                <td>${contact}</td>
                <td><button type="button" onclick="editStaff(this)">Edit</button></td>
            `;

            // Append the new row to the table
            document.getElementById('staffTable').getElementsByTagName('tbody')[0].appendChild(newRow);

            // Clear the form
            document.getElementById('staffForm').reset();

            // Update staff options in the report form
            updateStaffOptions();
        }

        function editStaff(button) {
            var row = button.closest('tr');
            var cells = row.getElementsByTagName('td');

            // Populate the form with the selected staff's information
            document.getElementById('name').value = cells[0].innerText;
            document.getElementById('qualification').value = cells[1].innerText;
            document.getElementById('role').value = cells[2].innerText;
            document.getElementById('contact').value = cells[3].innerText;

            // Remove the edited row
            row.remove();

            // Update staff options in the report form
            updateStaffOptions();
        }

        function updateStaffOptions() {
            var selectStaff = document.getElementById('selectStaff');
            selectStaff.innerHTML = '';

            // Get all staff names from the table
            var staffNames = Array.from(document.querySelectorAll('#staffTable tbody tr td:first-child')).map(td => td.innerText);

            // Add staff names as options in the select element
            staffNames.forEach(name => {
                var option = document.createElement('option');
                option.value = name;
                option.innerText = name;
                selectStaff.appendChild(option);
            });
        }

        function generateReport() {
            var selectedStaff = document.getElementById('selectStaff').value;

            // You can implement report generation logic here, for now, let's just alert the selected staff name
            alert(`Generating training history report for ${selectedStaff}`);
        }
    