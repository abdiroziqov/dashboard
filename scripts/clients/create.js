document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const addBtn = document.getElementById("add-btn");
  const modalCloseBtn = document.getElementById("modal-close");

  addBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  modalCloseBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // TOTAL CLIENTS COUNT
  const clients = JSON.parse(localStorage.getItem("clients") || "[]");

  document.getElementById("clients-count").innerHTML = clients?.length;

  // CREATE CLIENT ROW
  document.getElementById("table-body").innerHTML = clients?.length ? clients?.map((client) => `
        <tr>
            <td class="flex p-2 gap-1 items-center justify-center">
                <img src="/image/message.svg" alt="image" />
                <img
                src="/image/user.svg"
                alt="User Image"
                class="w-10 h-10 rounded-full mr-3 ml-3 shrink-0"
                />
                <div>
                <p class="text-slate-800 text-xs font-medium">
                    ${client?.username}
                </p>
                <p
                    class="text-slate-400 text-[10px] font-medium tracking-tight whitespace-nowrap"
                >
                    ${client?.phone}
                </p>
                </div>
            </td>
            <td class="text-center text-slate-800 text-[10px] font-medium">
                ${client?.payment}
            </td>
            <td class="text-center text-slate-800 text-[10px] font-medium">
                ${client?.rides}
            </td>
            <td class="text-center text-slate-800 text-[10px] font-medium">
                ${client?.finished}
            </td>
            <td class="text-center text-slate-800 text-[10px] font-medium">
                ${client?.location}
            </td>
            <td class="flex gap-2 items-center justify-center">
                <div class="flex gap-2">
                <img
                    class="cursor-pointer"
                    src="/image/edit.svg"
                    alt="edit"
                />
                <img
                    onclick="deleteClient(this)"
                    id="${client.id}"
                    class="cursor-pointer"
                    src="/image/trash.svg"
                    alt="trash"
                />
                </div>
            </td>
        </tr>
    `).join("") : `<h1 class="flex items-center justify-center w-full py-5">Ma'lumotlar bazasi bo'sh</h1>`;
});

function createClient(e) {
  // e.preventDefault();

  const client = {
    id: Math.random().toString(36).substring(2),
    username: e.currentTarget.elements[0].value,
    phone: e.currentTarget.elements[1].value,
    payment: e.currentTarget.elements[2].value,
    rides: e.currentTarget.elements[3].value,
    finished: e.currentTarget.elements[4].value,
    location: e.currentTarget.elements[5].value,
  };
  console.log(client);

  localStorage.setItem(
    "clients",
    JSON.stringify([
      ...JSON.parse(localStorage.getItem("clients") || "[]"),
      client,
    ])
  );
}

function deleteClient(e) {
  localStorage.setItem(
    "clients",
    JSON.stringify(
      JSON.parse(localStorage.getItem("clients") || "[]").filter(
        (client) => client.id !== e.id
      )
    )
  );
  window.location.reload();
}
