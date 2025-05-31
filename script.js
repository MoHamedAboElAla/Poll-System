const options=[
    { id: "option1", text: "JavaScript", votes: 0 },
    { id: "option2", text: "C#", votes: 0 },
    { id: "option3", text: "Python", votes: 0 },
    { id: "option4", text: "C++", votes: 0 },
    { id: "option5", text: "Java", votes: 0 },
];

function submitVote(){



const selectedOption = document.querySelector('input[name="poll"]:checked');
if (!selectedOption) {
    alert("Please select an option before submitting your vote.");
    return;
}

const optionId = selectedOption.value;
const optionObj = options.find((option) => option.id === optionId);


if (optionObj) {
    optionObj.votes++;
    displayResults();
}


}

function displayResults() {
    const result = document.getElementById("result");
    result.innerHTML = ""; // Clear previous results
    const totalVotes = getTotalVotes();
    options.forEach((option) => {
        const percentage = totalVotes > 0 ? ((option.votes / totalVotes) * 100).toFixed(2) : 0;
        const barWidth = percentage > 0 ? `${percentage}%` : "0%";
        const optionResult = document.createElement("div");
        optionResult.className = "option-result";

        optionResult.innerHTML = `
        <span class="option-text">${option.text}</span>
        <div class="bar-container">
            <div class="bar" style="width: ${barWidth};"></div>
            </div>
            <span class="percentage">${percentage}%</span>
        `

        result.appendChild(optionResult);
        
        



    });

}


function getTotalVotes() {

    return options.reduce((total,option)=> total + option.votes,0);


}