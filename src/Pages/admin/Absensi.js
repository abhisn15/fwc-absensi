import React, { useEffect, useState } from "react";
import Kelompok from "./Kelompok";
import axios from "axios";

export default function Absensi() {
	const [showAbsensi, setShowAbsensi] = useState(false);
	const [absensiData, setAbsensiData] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"http://192.168.43.194:8000/api/absens",
                ).then((response) => {
                    const responseData = response.data.absensi[0]
                    console.log(responseData)
                    setAbsensiData(responseData)
                })
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []); // empty dependency array means useEffect runs once after initial render

	const handleBack = () => {
		setShowAbsensi(true);
	};

	return (
		<div className="flex justify-center">
			{showAbsensi ? (
				<Kelompok />
			) : (
				<div className="flex flex-col justify-center">
					<h1>Halaman Absensi</h1>
					<div>{absensiData.img}</div>
					<div>{absensiData.link}</div>
					<div>{absensiData.status}</div>
					<div>{absensiData.keterangan}</div>
					<button
						onClick={handleBack}
						className="text-blue-400 hover:underline mt-5">
						Back
					</button>
				</div>
			)}
		</div>
	);
}
