import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/individual'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/pagina/:id" element={<Home />} ></Route>
            </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes