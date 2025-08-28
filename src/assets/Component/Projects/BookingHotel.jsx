import LoginAdmin from "../../img/bookingHotel/Panel Login Admin.png";
import DashboarAdmin from "../../img/bookingHotel/Dashboard.png";
import LoginUser from "../../img/bookingHotel/Dashboard login user.png";
import Pesan from "../../img/bookingHotel/Menu Pesan Detail Kamar .png";


const data = [LoginAdmin, DashboarAdmin, LoginUser, Pesan];

function UtilityOne() {
    return (
        <>
            <div className="min-h-screen flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-20 px-5">
                    <div className="flex flex-col space-y-10">
                        <div>
                            <h2 className="uppercase text-lg tracking-[8px]">Project</h2>
                            <h1 className="text-xl sm:text-3xl font-medium ">
                                Booking Hotel
                            </h1>
                        </div>
                        <div>
                            <h2 className="uppercase text-lg tracking-[8px] ">
                                Technology
                            </h2>
                            <p className="text-xl sm:text-3xl">
                                HTML, JS, Tailwind, DaisyUi, PHP, Laravel, Ngrok, Midtrans, Filament, OAuth, Livewire</p>
                        </div>
                        <div className="pb-4">
                            <h2 className="uppercase text-lg tracking-[8px] ">Year</h2>
                            <p className="text-xl sm:text-3xl">2025</p>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <h2 className="uppercase text-lg tracking-[8px] ">Description</h2>
                        <p className="text-lg sm:text-xl text-justify tracking-wide mb-5">
                            Aplikasi Booking Hotel adalah sebuah sistem pemesanan kamar hotel berbasis web yang dirancang dengan dua peran utama, yaitu Admin dan User.
                        </p>
                        <div className="flex flex-col gap-3">
                            <p className="text-lg sm:text-xl tracking-wide mb-2">
                                <span>Untuk Admin</span>
                            </p>
                            <p className=" text-lg sm:text-xl tracking-wide mb-5 text-justify">
                                Admin dapat mengelola seluruh data hotel, seperti informasi kamar, tipe kamar, harga, serta fasilitas yang tersedia. Selain itu, admin juga memiliki fitur untuk memantau reservasi dari pengguna, memverifikasi pembayaran, hingga menghasilkan laporan transaksi secara otomatis.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="text-lg sm:text-xl tracking-wide mb-2">
                                <span>Untuk User</span>
                            </p>
                            <p className=" text-lg sm:text-xl tracking-wide mb-5 text-justify">
                                User dapat mencari dan memesan kamar hotel sesuai kebutuhan melalui antarmuka yang sederhana dan mudah digunakan. Fitur pencarian kamar berdasarkan tanggal, tipe kamar, dan harga membantu pengguna menemukan kamar dengan cepat. Setelah melakukan reservasi, pengguna dapat melihat riwayat pemesanan, status pembayaran, serta mencetak bukti booking.
                            </p>
                        </div>




                    </div>
                </div>
            </div>
            <div className="mx-auto grid gap-8 py-10 px-2 sm:p-20 w-full">
                {data.map((img, index) => {
                    return (
                        <img
                            key={index}
                            src={img}
                            className="w-full rounded-xl shadow-2xl object-cover"
                            alt="Dunia Sandang 1"
                        />
                    )
                })}


            </div>
        </>

    );
}
export default UtilityOne;
