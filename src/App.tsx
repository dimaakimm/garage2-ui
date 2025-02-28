import MainPage from './atomic/pages/MainPage/MainPage.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LectionPage from './atomic/pages/LectionPage/LectionPage.tsx'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/lection" element={<LectionPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
