import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import { HeaderOnlyLayout } from 'src/Components/Layout';

const PublicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnlyLayout },
];

const PrivateRoutes = [];

export { PublicRoutes, PrivateRoutes };
