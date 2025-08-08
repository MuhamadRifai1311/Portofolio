import user from "../../img/project/user.png";
import product from "../../img/project/product.png";
import order from "../../img/project/order.png";
import report from "../../img/project/report.png";

function UtilityOne() {

  return (
    <>
      <>
        <div className="min-h-screen flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-0 px-5">
            <div className="flex flex-col space-y-10">
              <div>
                <h2 className="uppercase text-lg tracking-[8px]">Project</h2>
                <h1 className="text-xl sm:text-3xl font-medium ">
                  Simple Point Of Sale
                </h1>
              </div>
              <div>
                <h2 className="uppercase text-lg tracking-[8px] ">
                  Technology
                </h2>
                <p className="text-xl sm:text-3xl">
                  HTML, JS, Tailwind, DaisyUi, PHP, Laravel, Ngrok, Midtrans</p>
              </div>
              <div className="pb-4">
                <h2 className="uppercase text-lg tracking-[8px] ">Year</h2>
                <p className="text-xl sm:text-3xl">2025</p>
              </div>
            </div>

            <div className="flex flex-col">
              <h2 className="uppercase text-lg tracking-[8px] ">Description</h2>
              <p className="text-lg sm:text-xl text-justify tracking-wide mb-5">
                Saji Senja adalah aplikasi Point of Sale berbasis web yang dirancang
                untuk mempermudah proses penjualan dan pengelolaan produk. Melalui dashboard interaktif,
                pengguna dapat memantau jumlah produk, total penjualan, pendapatan, serta melihat grafik penjualan
                dan pendapatan per bulan.
              </p>
              <p className="text-lg sm:text-xl tracking-wide mb-2">
                <span>Fitur utama meliputi:</span>
              </p>
              <ul className="list-disc pl-5 text-lg sm:text-xl tracking-wide mb-5">
                <li>Manajemen pengguna, produk, dan kategori.</li>
                <li>Pembuatan pesanan baru dan riwayat transaksi.</li>
                <li>Laporan penjualan yang tersaji secara real-time.</li>
              </ul>
              <p className="text-lg sm:text-xl text-justify tracking-wide mb-5">
                Dengan antarmuka yang sederhana dan responsif,
                aplikasi ini membantu pelaku usaha mencatat transaksi,
                memantau kinerja penjualan, dan membuat laporan secara cepat dan akurat.
              </p>


            </div>
          </div>
        </div>
        <div className="mx-auto grid gap-8 py-10 px-2 sm:p-20 w-full">
          <img
            src={user}
            className="w-full rounded-xl shadow-2xl object-cover"
            alt="Dunia Sandang 1"
          />
          <img
            src={product}
            className="w-full rounded-xl shadow-2xl object-cover"
            alt="Dunia Sandang 2"
          />
          <img
            src={order}
            className="w-full rounded-xl shadow-2xl object-cover"
            alt="Dunia Sandang 3"
          />
          <img
            src={report}
            className="w-full rounded-xl shadow-2xl object-cover"
            alt="Dunia Sandang 4"
          />
        </div>
      </>
    </>
  );
}
export default UtilityOne;
