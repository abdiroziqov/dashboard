document.addEventListener("DOMContentLoaded", () => {
    const search = document.getElementById("default-search");

    search.addEventListener("keyup", (e) => {
        const value = e.target.value.toLowerCase();
        const clients = JSON.parse(localStorage.getItem("clients") || "[]");
        const filteredClients = clients.filter((client) => {
            return client.username.toLowerCase().includes(value) || client.phone.toLowerCase().includes(value);
        });

        document.getElementById("clients-count").innerHTML = filteredClients?.length;

        document.getElementById("table-body").innerHTML = filteredClients?.length ?filteredClients?.map((client) => `
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
        `).join("") : `<h1 class="flex items-center justify-center w-full py-5">Hech nima topilmadi</h1>`;
    });
})