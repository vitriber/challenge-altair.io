import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { GeneratorPage } from './pages/GeneratorPage';
import { PaymentPage } from './pages/PaymentPage';

export const RoutePages = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<GeneratorPage />} />
                <Route path="/payment" element={<PaymentPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routes;