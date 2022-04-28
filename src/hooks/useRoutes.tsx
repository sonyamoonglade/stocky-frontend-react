import {Routes, Route, Navigate, useLocation} from "react-router-dom";
import Register from "../components/authentication/register/Register";
import Login from "../components/authentication/login/Login";
import StockList from "../components/stock-list/StockList";
import Layout from "../components/layout/Layout";
import React from "react";
import FormLayout from "../components/authentication/formLayout/FormLayout";


export const useRoutes = (isAuthenticated: boolean | null) => {

    const {pathname} = useLocation()



    if(isAuthenticated){
       return <Layout>
            <Routes>
                <Route path={'/dashboard'} element={<StockList />} />
                <Route path={'*'} element={<Navigate to={'/dashboard'} />}  />
            </Routes>
        </Layout>
    }
    if(!isAuthenticated){
        if(pathname.includes('/dashboard')){
            return <Layout>
                <Routes>
                    <Route path={'/dashboard'} element={<StockList />} />
                </Routes>
            </Layout>
        }else
          return <FormLayout>
                <Routes>
                    <Route path={'/login'} element={<Login />}  />
                    <Route path={'/register'} element={<Register />}  />
                    <Route path={'*'} element={<Navigate to={'/dashboard'} />}  />
                </Routes>
            </FormLayout>

    }

}