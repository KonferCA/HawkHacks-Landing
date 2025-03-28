import { NavItems, Button } from '@components';
import { logEvent, analytics } from '@utils';

/*
 *
 * @description Menu interface
 * @props {boolean} showMenu, {void} hideMenu
 * 
 */
interface MenuProp {
    showMenu: boolean;
    hideMenu: () => void;
}

/*
 *
 * @description Menu component
 * @props {boolean} showMenu, {void} hideMenu
 * 
 */
const Menu: React.FC<MenuProp> = ({ showMenu, hideMenu }) => {
    const openInNewTab = (url: string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

    const handleSubmitPortal = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        openInNewTab('https://portal.hawkhacks.ca');
        logEvent(analytics, 'click_application_portal_button');
    };

    const handleSubmitFunding = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        openInNewTab('https://hawkhacks.ca/sponsorships.pdf');
    };

    if (!showMenu) return null;

    return (
        <div className="overflow-hidden fixed right-0 top-0 z-50 h-screen w-full max-w-[65%] border border-white bg-white/20 px-10 py-24 backdrop-blur-lg">
            <NavItems isHorizontal={false} handleClick={hideMenu} />
            <Button
                className="mt-20 block px-0 py-0 lg:hidden"
                onClick={handleSubmitPortal}
            >
                <span className="text-lg block px-5 py-2">
                    Dashboard
                </span>
            </Button>

            <Button
                className="mt-5 block px-0 py-0 lg:hidden"
                onClick={handleSubmitFunding}
            >
                <span className="text-lg block px-5 py-2">
                    Explore opportunities
                </span>
            </Button>
        </div>
    );
};

export { Menu };