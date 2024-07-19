import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: '대쉬보드',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: '소비자',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: '제품',
    path: '/products',
    icon: icon('ic_cart'),
  },
  {
    title: '블로그',
    path: '/blog',
    icon: icon('ic_blog'),
  },
];

export default navConfig;
