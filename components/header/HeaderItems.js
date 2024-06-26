"use client";

import { Button } from "@material-tailwind/react";

const HeaderItems = ({ handleClick, label, icon }) => {
  return (
    <li>
      <Button
        className="flex items-center gap-3 rounded-full border border-border-light bg-gradient-light-linear/85 px-4 py-2 font-noto font-bold"
        onClick={handleClick}
        color="white"
      >
        <div className="text-base font-semibold capitalize">{label}</div>

        {icon && icon}
      </Button>
    </li>
  );
};

export default HeaderItems;
