document.addEventListener('DOMContentLoaded', function() {
    const itemForm = document.getElementById('itemForm');
    const itemInput = document.getElementById('itemInput');
    const itemList = document.getElementById('itemList');

    itemForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const newItemText = itemInput.value;

        if (newItemText) {
            const li = document.createElement('li');
            li.textContent = newItemText;
            itemList.appendChild(li);

            itemInput.value = '';
        }
    });
});
