import dashboardIcon from "../../public/sidebar_icons/dashboard_icon.svg";
import patientsIcon from "../../public/sidebar_icons/patients_icon.svg";
import followUpsIcon from "../../public/sidebar_icons/followUps_icon.svg";
import appointmentsIcon from "../../public/sidebar_icons/appointments_icon.svg";
import prescriptionsIcon from "../../public/sidebar_icons/prescriptions_icon.svg";
import messagesIcon from "../../public/sidebar_icons/messages_icon.svg";
import profileIcon from "../../public/sidebar_icons/profile_icon.svg";

// 1. Define a type for the menu item
export type MenuItem = {
    id: number;
    menuName: string;
    menuIcon: string; // imported svg resolves to string (path) in Next.js
};

// 2. Build the dataset with all items
const menuData: MenuItem[] = [
    {
        id: 1,
        menuName: "Dashboard",
        menuIcon: dashboardIcon,
    },
    {
        id: 2,
        menuName: "Patients",
        menuIcon: patientsIcon,
    },
    {
        id: 3,
        menuName: "Follow-ups",
        menuIcon: followUpsIcon,
    },
    {
        id: 4,
        menuName: "Appointments",
        menuIcon: appointmentsIcon,
    },
    {
        id: 5,
        menuName: "Prescriptions",
        menuIcon: prescriptionsIcon,
    },
    {
        id: 6,
        menuName: "Messages",
        menuIcon: messagesIcon,
    },
    {
        id: 7,
        menuName: "Profile",
        menuIcon: profileIcon,
    },
];

export default menuData;
