const documents = [
  {
    name: "Potwierdzrone",
    price: "$50",
    priceColor: "text-teal-500 bg-teal-500/10",
    date: "Today, 16:36",
  },
  {
    name: "Potwierdzrone 2",
    price: "$27",
    priceColor: "text-red-500 bg-red-500/10",
    date: "Today, 16:36",
  },
  {
    name: "Potwierdzrone 3",
    price: "$20",
    priceColor: "text-teal-500 bg-teal-500/10",
    date: "Today, 16:36",
  },
];

// Generate menu items
document.addEventListener("DOMContentLoaded", () => {
  const documentWrapper = document.getElementById("documents");
  const documentItems = documents.map(
    (item, idx) => `
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-4">
          <div class="relative">
            <span class="text-white text-[13px] font-normal mt-0.5 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">${idx + 1}</span>
            <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_203_532)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M25 8.06678H23.7179V5.58469C23.7179 4.90026 23.1429 4.34365 22.4359 4.34365H14.1026C13.9526 4.34365 13.8077 4.29277 13.6923 4.20031L10.0244 1.24104H2.5641C1.85705 1.24104 1.28205 1.79765 1.28205 2.48209V6.82574H25V8.06678H1.28205H0V2.48209C0 1.11322 1.15 0 2.5641 0H10.2564C10.4064 0 10.5513 0.0508828 10.6667 0.14334L14.3346 3.10261H22.4359C23.85 3.10261 25 4.21582 25 5.58469V8.06678Z" fill="#5D5FEF"/>
              <path d="M25 8.06678H23.7179V5.58469C23.7179 4.90026 23.1429 4.34365 22.4359 4.34365H14.1026C13.9526 4.34365 13.8077 4.29277 13.6923 4.20031L10.0244 1.24104H2.5641C1.85705 1.24104 1.28205 1.79765 1.28205 2.48209V6.82574H25V8.06678H1.28205H0V2.48209C0 1.11322 1.15 0 2.5641 0H10.2564C10.4064 0 10.5513 0.0508828 10.6667 0.14334L14.3346 3.10261H22.4359C23.85 3.10261 25 4.21582 25 5.58469V8.06678Z" stroke="white" stroke-width="0.2"/>
              <rect y="6" width="27" height="18" rx="2" fill="#A5A6F6" stroke="#5D5FEF"/>
              </g>
              <defs>
              <clipPath id="clip0_203_532">
              <rect width="27" height="24" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <p class="text-blue-950 text-sm font-bold leading-normal">
              ${item.name}
            </p>
            <p class="text-slate-400 text-xs font-medium leading-tight">
              ${item.date}
            </p>
            </div>
          </div>
            <p class="${item.priceColor} p-[7px] text-sm rounded-[7px] font-bold leading-normal">
              ${item.price}
            </p>
        </div>
    `
  );

  documentWrapper.innerHTML = documentItems.join("");
});
