import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [buttonColor, setButtonColor] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setButtonColor(username && password ? '#2449EE' : '#B0B0B0');
    }, [username, password]);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleLoginClick();
        }
    };
    localStorage.removeItem('token');
    localStorage.removeItem("_isKelompok");


    const handleLoginClick = async () => {
        try {
            const response = await axios.post("http://192.168.43.194:8000/api/login", {
                username,
                password,
            });

            const responseData = response.data;
            localStorage.setItem('token', responseData.authorization.token);

            if (responseData.authorization && responseData.authorization.token) {
                axios.get("http://192.168.43.194:8000/api/users", {
                    token: responseData.authorization.token,
                    kelompok: responseData.user.kelompok,
                });
                localStorage.setItem("_isKelompok", responseData.user.kelompok);

                if (responseData.user.role === "0") {
                    navigate('/admin');
                } else {
                    navigate('/submit');
                }

                alert('Login berhasil!');
            }
        } catch (error) {
            console.error("Login Failed!", error);
            alert('Username dan Passwordmu salah!');
        }
    };


    return (
        <section className="gradient-form h-screen flex justify-center items-center bg-neutral-200 dark:bg-neutral-700">
            <img
                className="object-cover h-screen w-full"
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
                                                    type="text"
                                                    className="peer block min-h-[auto] w-full rounded border border-inherit bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 focus:border-blue-500 focus:ring focus:ring-blue-500"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Username"
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                    onKeyPress={handleKeyPress}

                                                />
                                            </div>

                                            {/* Password input */}
                                            <div className="relative mb-4" data-te-input-wrapper-init>
                                                <input
                                                    type="password"
                                                    className="peer block min-h-[auto] w-full rounded border border-inherit bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200  focus:border-blue-500 focus:ring focus:ring-blue-500"
                                                    id="exampleFormControlInput11"
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    onKeyPress={handleKeyPress}
                                                />
                                            </div>

                                            {/* Submit button */}
                                            <div className="mb-12 pb-1 pt-1 text-center">
                                                <Link to={handleLoginClick}>
                                                    <button
                                                        onClick={handleLoginClick}
                                                        className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                                        type="button"
                                                        data-te-ripple-init
                                                        data-te-ripple-color="light"
                                                        style={{
                                                            background: buttonColor,
                                                        }}
                                                    >
                                                        Log in
                                                    </button>
                                                </Link>
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
                                        <h4 className="mb-6 text-3xl font-semibold">
                                            Portal Login
                                        </h4>
                                        <p className="text-sm">
                                            Untuk Peserta Prakerin dalam melaporkan laporan kerja harian di PT. Jaya Konsultan Indonesia
                                            (Silahkan ikuti instruksi dari Sekolah Anda/Tim Kami di PT.Jaya Konsultan Indonesia)
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
