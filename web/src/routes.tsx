import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { GeneratorPage } from './pages/GeneratorPage';

export const RoutePages = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<GeneratorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routes;