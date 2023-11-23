import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Submit() {
    const [img, setGambar] = useState('');
    const [link, setLink] = useState('');
    const [status, setSiswaTidakHadir] = useState('');
    const [keterangan, setKeterangan] = useState('');
    const [buttonColor, setButtonColor] = useState('');
    const [kelompok, setKelompok] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const dataKelompok = localStorage.getItem("_isKelompok");
        setKelompok(dataKelompok);
    }, []);


    useEffect(() => {
        setButtonColor(img && link && status && keterangan ? '#2449EE' : '#B0B0B0');
    }, [img, link, status, keterangan]);

    useEffect(() => {
        const isUser = localStorage.getItem('token') || sessionStorage.getItem('token');
        if (!isUser) {
            navigate('/', { replace: true });
        }
    }, [navigate]);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = async () => {
        try {
            await axios.post('http://192.168.43.194:8000/api/absensi', {
                img: img,
                link: link,
                status: status,
                keterangan: keterangan
            });
        alert('Berhasil melakukan absen!')
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogout = () => {

        navigate('/', { replace: true });
    };

    return (
        <section className="gradient-form h-screen flex justify-center items-center bg-neutral-200 dark:bg-neutral-700">
            <img
                className="object-cover absolute xl:h-[1000px] md:h-[1700px] sm:h-[1400px] max-sm:h-[1450px] w-full"
                src="https://wallpaperaccess.com/full/1799660.jpg"
                alt="logo"
            />
            <div className="absolute container h-full p-10">
                <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                    <div className="w-full">
                        <div className="block rounded-lg bg-neutral-800 text-white shadow-lg dark:bg-neutral-800">
                            <div className="g-0 lg:flex lg:flex-wrap">
                                {/* Left column container*/}
                                <div className="px-4 md:px-0 lg:w-6/12">
                                    <div className="md:mx-6 md:p-12">
                                        {/* Logo */}
                                        <div className="text-center">
                                            <img
                                                className="mx-auto rounded-full w-48 mb-4"
                                                src="./assets/logo.png"
                                                alt="logo"
                                            />
                                            <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                                                FWC TECH
                                            </h4>
                                        </div>

                                        <form>
                                            <p className="mb-4">Please login to your account</p>
                                            {/* Username input */}
                                            <div className="relative mb-4" data-te-input-wrapper-init>
                                                <input
                                                    type="file"
                                                    className="peer block min-h-[auto] w-full rounded border border-inherit bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 focus:border-blue-500 focus:ring focus:ring-blue-500"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Gambar"
                                                    value={img}
                                                    onChange={(e) => setGambar(e.target.value)}
                                                    onKeyPress={handleKeyPress}

                                                />
                                            </div>

                                            {/* Password input */}
                                            <div className="relative mb-4" data-te-input-wrapper-init>
                                                <input
                                                    type="text"
                                                    className="peer block min-h-[auto] w-full rounded border border-inherit bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200  focus:border-blue-500 focus:ring focus:ring-blue-500"
                                                    id="exampleFormControlInput11"
                                                    placeholder="Masukkan Link youtube"
                                                    value={link}
                                                    onChange={(e) => setLink(e.target.value)}
                                                    onKeyPress={handleKeyPress}
                                                />
                                            </div>
                                            <div className="relative mb-4" data-te-input-wrapper-init>
                                                <input
                                                    type="text"
                                                    className="peer block min-h-[auto] w-full rounded border border-inherit bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200  focus:border-blue-500 focus:ring focus:ring-blue-500"
                                                    id="exampleFormControlInput11"
                                                    placeholder="Siswa Tidak Hadir"
                                                    value={status}
                                                    onChange={(e) => setSiswaTidakHadir(e.target.value)}
                                                    onKeyPress={handleKeyPress}
                                                />
                                            </div>
                                            <div className="relative mb-4" data-te-input-wrapper-init>
                                                <input
                                                    type="text"
                                                    className="peer block min-h-[auto] w-full rounded border border-inherit bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200  focus:border-blue-500 focus:ring focus:ring-blue-500"
                                                    id="exampleFormControlInput11"
                                                    placeholder="Keterangan"
                                                    value={keterangan}
                                                    onChange={(e) => setKeterangan(e.target.value)}
                                                    onKeyPress={handleKeyPress}
                                                />
                                            </div>

                                            {/* Submit button */}
                                            <div className="mb-8 pb-1 pt-1 text-center">
                                                <button
                                                    onClick={handleSubmit}
                                                    className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                                    type="button"
                                                    data-te-ripple-init
                                                    data-te-ripple-color="light"
                                                    style={{
                                                        background: buttonColor,
                                                    }}
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                            <div className='flex justify-center sm:mb-10 max-sm:mb-10'>
                                                <button className='bg-red-500 w-20 rounded' onClick={handleLogout}>Logout</button>
                                            </div>
                                            {/* Register button */}
                                        </form>
                                    </div>
                                </div>

                                {/* Right column container with background and description */}
                                <div
                                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                                    style={{
                                        background:
                                            'linear-gradient(to right, #ee7724, #ee7724, #ee7724, #ee7724)',
                                    }}
                                >
                                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                                        <h4 className="text-3xl font-semibold">
                                            KELOMPOK : {kelompok}
                                        </h4>
                                        <h4 className="mb-6 text-3xl font-semibold">
                                            SMKN 40 JAKARTA
                                        </h4>
                                        <p className="text-sm">
                                            Silahkan Upload Progress Harian Kelompok Anda
                                            (1 Hari = 1 Laporan) Paling lambat di hari yang sama
                                            Upload Foto progress Kerja Harian, Masukkan Keterangan (apabila ada link/tautan yang akan dimasukkan), serta laporkan siapa saja anggota kelompok Anda yang tidak hadir pada hari kerja tersebut.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
