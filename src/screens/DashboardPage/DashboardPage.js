import './DashboardPage.scss';
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import LocalSessionServices from "./LocalSessionServices/LocalSessionServices";
import LocalDirectoryServices from "./LocalDirectoryServices/LocalDirectoryServices";
import hubIcon from "../../resources/icons/hub-icon.png";
import { GetLocalSessionServices } from '../../services/api/DashboardFunc/LocalSessionService/GetLocalSessionServices';
import GetLocalDirectoryServices from '../../services/api/DashboardFunc/LocalDirectoryService/GetLocalDirecoryServices';

const Dashboard = () => {
    const localSessionServicesData = GetLocalSessionServices()
    const localDirectoryServicesData = GetLocalDirectoryServices()

    return (
        <div className="dashboardPage">
            <Sidebar items="dashboard"/>
            <div className="listContainer">
                <Navbar />
                <h2>Dashboard</h2>
                <div className="dashboardContainer">
                    <div className="grid-item">
                        <LocalSessionServices services={localSessionServicesData} />
                    </div>
                    <div className="grid-item">
                        <LocalDirectoryServices localDirectoryServices={localDirectoryServicesData} />
                    </div>
                    <div className="grid-item">
                        <img className="gss-icon" src={hubIcon} alt="Hub Icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
