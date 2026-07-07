const button = document.getElementById("useButton");
const status = document.getElementById("status");

button.addEventListener("click", () => {

    const ok = confirm("本当に『会いに来て券』を使用しますか？");

    if (!ok) return;

    button.disabled = true;
    button.innerHTML = "✅ 使用済み";
    button.style.background = "#999";

    status.innerHTML = "この券は使用済みです💌";
    status.style.color = "#999";

    alert("崇太郎さんに通知しました📩（現在はデモです）");

});