/**
 * The header component for the page
 * @returns {React.JSX.Component} Header React Component
 */
export default function Header() {
    return (
        <header className="site-header">
            <div id="site-name-and-nav">
                <h1 id="site-name">
                    Campus Pulse
                </h1>

                <nav>
                    <a href="#">Home</a>
                    <a href="#events">Events</a>
                    <a href="#clubs">Clubs</a>
                </nav>
            </div>

            <p id="site-slogan">
                Discover what's happening on campus.
            </p>

        </header>
    )
}