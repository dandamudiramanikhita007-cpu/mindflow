const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");

if (menu && nav) {
  menu.onclick = () => nav.classList.toggle("open");
}

function toast(message) {
  let notification = document.querySelector(".toast");

  if (!notification) {
    notification = document.createElement("div");
    notification.className = "toast";
    Object.assign(notification.style, {
      position: "fixed",
      right: "20px",
      bottom: "20px",
      padding: "12px 16px",
      background: "#172033",
      color: "#fff",
      borderRadius: "10px",
      zIndex: "20",
    });
    document.body.appendChild(notification);
  }

  notification.textContent = message;
  window.setTimeout(() => notification.remove(), 1800);
}

const cardDialog = document.createElement("dialog");
cardDialog.className = "card-dialog";
cardDialog.setAttribute("aria-labelledby", "card-dialog-title");
cardDialog.setAttribute("aria-describedby", "card-dialog-description");
Object.assign(cardDialog.style, {
  width: "min(460px, calc(100% - 32px))",
  padding: "26px",
  border: "0",
  borderRadius: "17px",
  color: "#172033",
  boxShadow: "0 20px 60px #0004",
});

const dialogStyles = document.createElement("style");
dialogStyles.textContent =
  "dialog.card-dialog::backdrop{background:#17203380}.dialog-close{border:0;border-radius:10px;padding:11px 17px;background:#087f5b;color:white;font-weight:700;cursor:pointer}";
document.head.appendChild(dialogStyles);

const dialogTitle = document.createElement("h2");
dialogTitle.id = "card-dialog-title";
dialogTitle.style.margin = "0 0 10px";

const dialogDescription = document.createElement("p");
dialogDescription.id = "card-dialog-description";
Object.assign(dialogDescription.style, {
  margin: "0 0 22px",
  color: "#687184",
  lineHeight: "1.5",
});

const closeDialogButton = document.createElement("button");
closeDialogButton.className = "dialog-close";
closeDialogButton.type = "button";
closeDialogButton.textContent = "Close";
closeDialogButton.style.marginTop = "6px";
closeDialogButton.addEventListener("click", () => cardDialog.close());

cardDialog.append(dialogTitle, dialogDescription, closeDialogButton);
document.body.appendChild(cardDialog);

document.querySelectorAll(".card button").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    const title = card.querySelector("h3");
    const description = card.querySelector("p");

    dialogTitle.textContent = title.textContent;
    dialogDescription.textContent = description.textContent;
    cardDialog.showModal();
  });
});

const getStartedButton = document.querySelector(".hero .btn");
if (getStartedButton) {
  getStartedButton.addEventListener("click", () =>
    toast("Welcome to your finance workspace."),
  );
}

const actionButton = document.querySelector("#action");
if (actionButton) {
  actionButton.addEventListener("click", () => {
    document.querySelector("#result").textContent =
      "Demo completed successfully. No real transaction was made.";
  });
}