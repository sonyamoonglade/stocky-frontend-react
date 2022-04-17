import React from 'react';
import './sidebar.scss'
import {Avatar, Icon} from "@chakra-ui/react";
import {BiBookmark, BiCog, BiHome, BiLineChart, BiWallet} from "react-icons/bi";
//@ts-ignore
import logo from '../../../assets/logo/chart-logo-png.png'
import BalanceChange from "./components/balance-change/BalanceChange";
import {BalanceChangeInterface, CurrencyType} from "../../../shared/types/types";

const Sidebar = () => {

    const avatarUrl:string = 'https://external-preview.redd.it/fBai3DKZrSGf3YRd89f9pUHJua_lyGNS3LF0I-joA8Y.jpg?auto=webp&s=a2792118a8b080350240abc745d3ca6e53f18ca1'


    const mockPositiveChange = false;

    const userInWalletPage = false;
    const notificationShowCondition = mockPositiveChange && !userInWalletPage

    const mockBalanceChange:BalanceChangeInterface = {
        isPositiveChange: false,
        currencyType: CurrencyType.US_DOLLAR,
        changeNumeric: 651.8,
        changePercentage: -5.9,
        usedFor: 'for-sidebar'
    }

    return (
        <div className='sidebar'>

            <ul className="icon-list">
                <div className="sidebar-logo-box">
                    <img src={logo} alt="logo has not found :(" className='company-logo'/>
                </div>
                <li className='sidebar-icon'>
                    <Icon as={BiHome} color='white' boxSize={9} />
                </li>
                <li className='sidebar-icon'>
                    <Icon as={BiBookmark} color='white' boxSize={9}/>
                </li>
                <li className='sidebar-icon'>
                    <Icon as={BiLineChart} color='white' boxSize={9}/>
                </li>
                <li className="sidebar-icon wallet">
                    <Icon as={BiWallet} color='white' boxSize={9}/>
                    <div className={notificationShowCondition ? 'notification bg-green' : 'notification bg-red'}></div>
                </li>
                <li className='sidebar-icon'>
                    <Icon as={BiCog} color='white' boxSize={9}  />
                </li>

            </ul>

        <div className="personal-info-composed">

            {/*<BalanceChange balanceChange={mockBalanceChange} />*/}
            <div className="sidebar-avatar">
                <Avatar className='sidebar-avatar-img' src={avatarUrl} boxSize={12}/>
            </div>
        </div>

        </div>
    );
};

export default Sidebar;