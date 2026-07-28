"use client"

import Link from 'next/link';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import Home from '@mui/icons-material/Home';

const SideNav = () => {
  return (
    <div className="bg-cyan-500 h-full fixed top-0 left-0 overflow-y-auto">
      <Link
        className="flex rounded-md mt-18 px-4"
        href="/"
      >
        <div className="text-white">
          <Home sx={{ color: '#FFF' }} />
        </div>
      </Link>
      <Link
        className="flex rounded-md mt-7 px-4"
        href="/create"
      >
        <div className="text-white">
          <DriveFileRenameOutlineIcon sx={{ color: '#FFF' }} />
        </div>
      </Link>
    </div>
  );
}

export default SideNav;
