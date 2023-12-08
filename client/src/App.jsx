import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';

import Path from './paths';

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import VillanList from './components/villan-list/VillanList';
import CreateVillan from './components/create-villan/CreateVillan';
import VillanDetails from './components/villan-details/VillanDetails';
import VillanEdit from './components/villan-edit/VillanEdit';
import CapturedVillans from './components/captured-list/CapturedVIllans';
import Login from './components/login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/register/Register';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import AuthGuard from './components/routeGuards/AuthGuard';
import Page404 from './components/404Page/404Page';


function App() {

    return (
        <ErrorBoundary>

            <AuthProvider >
                <div id="box">
                    <Header />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/games" element={<VillanList />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/games/:gameId" element={<VillanDetails />} />
                        <Route path={Path.Logout} element={<Logout />} />
                        <Route path="*" element={<Page404 />} />

                        <Route element={<AuthGuard />}>
                            <Route path="/games/captured" element={<CapturedVillans />} />
                            <Route path="/games/create" element={<CreateVillan />} />
                            <Route path={Path.VillanEdit} element={<VillanEdit />} />

                        </Route>
                    </Routes>
                </div>
            </AuthProvider>
        </ErrorBoundary>
    )
}

export default App
