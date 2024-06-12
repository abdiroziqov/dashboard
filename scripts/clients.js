const clients = [
  {
    name: "John Doe",
    avatar: "https://picsum.photos/34",
    phone: "+998 (99) 436-46-15",
  },
  {
    name: "John Doe 2",
    avatar: "https://picsum.photos/35",
    phone: "+998 (99) 436-46-15",
  },
  {
    name: "John Doe 3",
    avatar: "https://picsum.photos/36",
    phone: "+998 (99) 436-46-15",
  },
];

// Generate menu items
document.addEventListener("DOMContentLoaded", () => {
  const client = document.getElementById("clients");
  const clientItems = clients.map(
    (item) => `
        <div class="flex items-center gap-4">
          <div>
            <img src="${item.avatar}" class="rounded-full" alt="">
          </div>
          <div>
            <p class="text-blue-950 text-sm font-bold leading-normal">
              ${item.name}
            </p>
            <p class="text-slate-400 text-xs font-medium leading-tight">
              ${item.phone}
            </p>
          </div>
        </div>
    `
  );

  client.innerHTML = clientItems.join("");
});
