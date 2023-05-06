import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import { HeaderOnlyLayout } from '~/Components/Layout';
import config from '~/config';

const PublicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnlyLayout },
];

const PrivateRoutes = [];

export { PublicRoutes, PrivateRoutes };
