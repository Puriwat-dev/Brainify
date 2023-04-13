const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Brainify</h1>
            <div className="links">
                <a href="/" style={styles.headering}>Home</a>
                <a href="/create">New Blog</a>
            </div>
        </nav>
     );
}

const styles = {
    headering: {
        fontSize: "20px",
        color: "red",
    },
};
export default Navbar;
