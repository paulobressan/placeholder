const PhotoList = () => System.import('./components/photo/Photo-list.vue');
const Home = () => System.import('./components/home/Home.vue');

const routes = [
    {path: '', name:'home', component: Home },
    {path: 'fotos', name:'fotos', component: PhotoList}
];

export default routes;