import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { signOut, useSession } from "next-auth/client";
function Header() {
    const [session]=useSession();
    return (
        <div className='sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white'>
            {/* //Left Menu Button */}
            <Button
                color="gray"
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className="md:inline-flex h-20 w-20 border-0">
                <Icon name="menu" size="3xl" />
            </Button>

            {/* //Docs Logo */}
            <Icon name="description" size="5xl" color="blue" />
            {/* Docs Heading */}
            <h1 className="mx-5 md:mx-20 md:inline-flex ml-2 text-gray-700 text-2xl">Docs</h1>
            <div className="flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded focus-within focus-within:shadow-md">
                <Icon name="search" size="3xl" color="gray"></Icon>
                <input type="text" placeholder="Seacrh" className="flex-grow px-5 text-base bg-transparent outline-none" />
            </div>

            {/* Apps Button */}
            <Button
                color="gray"
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className="ml-5 md:ml-20 h-20 w-20 border-0">
                <Icon name="apps" size="3xl" color="gray" />
            </Button>
            {/* profile-image */}
            <img loading="lazy"
                onClick={signOut}
                className="cursor-pointer h-12 w-12 rounded-full ml-2"
                src={session?.user?.image}

            />
        </div>
    )
}

export default Header
