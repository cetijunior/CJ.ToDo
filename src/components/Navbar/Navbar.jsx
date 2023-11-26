import { useState } from "react";
import Burger from "./Button";
import Menu from "./Menu";

const Navbar = () => {
    const [open, setopen] = useState(false)

    return (
        <div>
            <Burger open={open} setOpen={setopen} />
            <Menu open={open} setOpen={setopen} />
        </div>
    )
}

export default Navbar