const navLinks = [
    { id: 1, text: 'صفحه اصلی', link: '/', icon: 'fa fa-home feather' },
   
    { id: 2, text: 'لیست کاربران', link: '/Reports', icon: 'fa fa-university feather' },
   
    { id: 3, text: 'گزارشات ', link: '/NimaReports', icon: 'fa fa-user feather' },
    { id: 4, text: 'تعریف کاربران', link: '/UserDefine', icon: 'fa fa-envelope feather' },
    { id: 5, text: 'افزودن خبر ', link: '/AddNews', icon: 'fa fa-user feather' },
];

const getNavLinks = () => {
    return [...navLinks];
};

export default getNavLinks;
