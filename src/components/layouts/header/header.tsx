import Link from 'next/link';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <div className="bg-cyan-500 w-full fixed">
      <div className="text-white m-2">
        <Link href="/home">
          <Button sx={{ color: '#FFF', fontWeight: 'bold', fontSize: 'large' }} color="secondary">Insta Travel</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
