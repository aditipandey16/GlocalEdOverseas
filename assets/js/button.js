function openForm() {
    document.getElementById("myModal").style.display = "block";
}

function closeForm() {
    document.getElementById("myModal").style.display = "none";
}

function Button({ text }) {
    return (
        <button onClick={openForm}>{text}</button>
    );
}

export default Button;