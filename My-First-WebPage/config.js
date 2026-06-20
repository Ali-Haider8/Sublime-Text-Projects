const btn = document.getElementById("bt");
const text = document.getElementById("text_ali");

text.textContent="Ali Haider";
btn.addEventListener("click",() => {
	text.textContent="Username: Ali-Haider8";
	btn.textContent="Clicked!";
});