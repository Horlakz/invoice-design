import icon from "./icon.png";

function App() {
  return (
    <div className="flex items-center justify-center w-screen container mx-auto p-28">
      {/* main container */}
      <main className="border-t-4 border-[#FFC94B] pt-8 w-[46rem]">
        <header className="px-8 flex justify-between items-center">
          <div className="uppercase space-y-1">
            <h1 className="font-black text-2xl text-[#1D2739]">
              Invoice for something important
            </h1>
            <p className="text-sm text-[#667185] font-medium">#gp2324-01</p>
          </div>

          <img src={icon} alt="icon" className="w-16 h-16" />
        </header>

        <section className="mx-8 border-y-[0.66px] border-[#CFE2FF] divide-x-[0.66px] my-14 flex justify-between h-fit">
          <div className="flex flex-col items-stretch justify-between py-4 gap-6 font-semibold">
            <div className="space-y-1">
              <h3 className="text-xs text-[#1D2739]">Issued</h3>
              <p className="text-[#667185]">Jul 26, 2024</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-xs text-[#1D2739]">Due</h3>
              <p className="text-[#667185]">Aug 10, 2024</p>
            </div>
          </div>
          <div className="w-48 py-4 px-3">
            <h3 className="text-[#1D2739] font-semibold pb-4">Billed to</h3>
            <p className="font-semibold text-[#667185] text-sm pb-2">
              Nova Astral Space Alliance
            </p>
            <p className="text-sm text-[#667185]">
              13th Street. 47 W 13th St, Idumota, 10011, NG.
            </p>
            <p className="text-sm text-[#667185]">+234 803 124 4573</p>
          </div>
          <div className="w-48 py-4 px-3">
            <h3 className="text-[#1D2739] font-semibold pb-4">From</h3>
            <p className="font-semibold text-[#667185] text-sm pb-2">
              Discova Trips
            </p>
            <p className="text-sm text-[#667185]">
              88, Awolowo Road, Ikoyi, Lagos
            </p>
            <p className="text-sm text-[#667185]">+234 803 124 4573</p>
          </div>
        </section>

        <section className="px-8 w-full mb-8">
          <div className="flex justify-between border-b border-[#CFE2FF] py-2 w-full text-sm text-[#1D2739] font-semibold">
            <span className="w-full">Service Description</span>
            <div className="w-full flex justify-between">
              <span>Qty</span>
              <span>Rate</span>
              <span>Line total</span>
            </div>
          </div>
          <div className="w-full border-b border-[#CFE2FF]">
            {[1, 2].map(() => (
              <div className="flex justify-between py-2 w-full">
                <div className="w-full grid">
                  <span className="text-sm text-[#1D2739] font-semibold">
                    Service Name
                  </span>
                  <span className="text-xs text-[#5E6470]">Description</span>
                </div>
                <div className="text-[#667185] w-full flex justify-between">
                  <span>2</span>
                  <span>&#8358;100.00</span>
                  <span>&#8358;100.00</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex justify-end px-8">
          <div className="flex flex-col w-72">
            <div className="flex items-center justify-between pb-2 mb-2 border-b-[0.66px] border-[#E4E7EC]">
              <span className="font-semibold text-sm text-[#1D2739]">
                Subtotal
              </span>
              <span className="text-[#667185] text-sm font-semibold">
                &#8358;400.00
              </span>
            </div>
            <div className="flex items-center justify-between pb-2 mb-2 border-b-[0.66px] border-[#E4E7EC]">
              <span className="font-semibold text-sm text-[#1D2739]">
                Tax &#40;0%&#41;
              </span>
              <span className="text-[#667185] text-sm font-semibold">
                &#8358;0.00
              </span>
            </div>
            <div className="flex items-center justify-between pb-2 mb-2">
              <span className="font-semibold text-sm text-[#1D2739]">
                Total
              </span>
              <span className="text-sm font-semibold">&#8358;400.00</span>
            </div>
            <div className="flex items-center justify-between py-3.5 mb-2 border-y-2 border-[#FFC94B] text-[#FFC94B] text-sm font-semibold">
              <span>Amount Due</span>
              <span>&#8358;400.00</span>
            </div>
          </div>
        </section>

        <section className="px-8 py-10 space-y-2.5">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.63193 0.350189C1.17836 0.350189 0 1.52855 0 2.98212V10.8779C0 12.3315 1.17836 13.5099 2.63193 13.5099H10.5277C11.9813 13.5099 13.1597 12.3315 13.1597 10.8779V2.98212C13.1597 1.52855 11.9813 0.350189 10.5277 0.350189H2.63193ZM6.21427 4.23898C6.21427 4.01187 6.02904 3.82452 5.80434 3.85796C4.38338 4.069 3.28992 5.36135 3.28992 6.92408V9.58509C3.28992 9.8122 3.47405 9.99633 3.70116 9.99633H5.80303C6.03014 9.99633 6.21427 9.8122 6.21427 9.58509V7.72236C6.21427 7.49526 6.03014 7.31112 5.80303 7.31112H4.75215V6.86876C4.75215 6.16265 5.19852 5.56697 5.80896 5.38093C6.02612 5.31467 6.21427 5.13656 6.21427 4.90935V4.23898ZM9.86975 4.23898C9.86975 4.01187 9.68451 3.82452 9.45981 3.85796C8.03885 4.069 6.94539 5.36135 6.94539 6.92408V9.58509C6.94539 9.8122 7.12952 9.99633 7.35663 9.99633H9.45851C9.68561 9.99633 9.86975 9.8122 9.86975 9.58509V7.72236C9.86975 7.49526 9.68561 7.31112 9.45851 7.31112H8.40752V6.86876C8.40752 6.16275 8.854 5.56697 9.46433 5.38093C9.6816 5.31467 9.86975 5.13656 9.86975 4.90935V4.23898Z"
              fill="#0D6EFD"
            />
          </svg>
          <h5 className="font-semibold text-[#1D2739] text-sm">
            Additional Notes
          </h5>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            expedita.
          </p>
        </section>

        <footer className="border-t border-[#E4E7EC] py-6 px-8 gap-4 flex itmes-center justify-end">
          <button className="bg-[#F7F9FC] font-semibold border border-[#D0D5DD] rounded-md px-6 py-3">
            Cancel
          </button>
          <button className="bg-[#0D6EFD] text-white font-semibold border border-[#D0D5DD] rounded-md px-6 py-3">
            Make Payment
          </button>
        </footer>
      </main>
    </div>
  );
}

export default App;
