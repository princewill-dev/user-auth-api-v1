document.getElementById('memberForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const memberId = document.getElementById('memberId').value;

    // Make sure to update this to the correct endpoint
    const apiUrl = `http://127.0.0.1:8000/api/show/${memberId}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.status === 200) {
                document.getElementById('result').innerText = JSON.stringify(data.member, null, 2);
            } else {
                document.getElementById('result').innerText = data.message;
            }
        })
        .catch(error => {
            console.error('There was an error fetching the member data:', error);
            document.getElementById('result').innerText = 'An error occurred while fetching data. Please try again later.';
        });
});
