import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Absensi from './Kelompok';

export default function Dashboard() {
    const data = [
        {
            "id": 1,
            "kelas": "Rekayasa Perangkat Lunak",
            "img": "https://images.unsplash.com/photo-1542831371-32f555c86880?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "id": 2,
            "kelas": "Rekayasa Perangkat Lunak",
            "img": "https://images.unsplash.com/photo-1542831371-32f555c86880?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "id": 3,
            "kelas": "Rekayasa Perangkat Lunak",
            "img": "https://images.unsplash.com/photo-1542831371-32f555c86880?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "id": 4,
            "kelas": "Rekayasa Perangkat Lunak",
            "img": "https://images.unsplash.com/photo-1542831371-32f555c86880?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "id": 5,
            "kelas": "Rekayasa Perangkat Lunak",
            "img": "https://images.unsplash.com/photo-1542831371-32f555c86880?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "id": 6,
            "kelas": "Rekayasa Perangkat Lunak",
            "img": "https://images.unsplash.com/photo-1542831371-32f555c86880?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ]

    const [showAbsensi, setShowAbsensi] = React.useState(false);

    const handleAbsensi = () => {
        setShowAbsensi(true);
    };

    return (
        <div className='flex flex-wrap justify-center items-center gap-10'>
            {showAbsensi ? (
                <Absensi />
            ) : (
                data.map((item) => (
                    <Card key={item.id} sx={{ maxWidth: 270 }}>
                        <CardMedia
                            component="img"
                            alt={item.kelas}
                            height="140"
                            image={item.img}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="p" component="div">
                                {item.kelas}
                            </Typography>
                        </CardContent>
                        <div className='flex justify-center bg-slate-200'>
                            <CardActions>
                                <Button onClick={handleAbsensi} className='w-[400px]' size="small">Lihat Absensi</Button>
                            </CardActions>
                        </div>
                    </Card>
                ))
            )
            }
        </div >
    );
}