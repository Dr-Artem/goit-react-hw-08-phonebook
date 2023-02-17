import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <section>
            <AppBar />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </section>
    );
};
