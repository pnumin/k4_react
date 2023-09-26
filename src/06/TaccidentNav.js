const TaccidentNav = ({title, c, setSel}) => {
    console.log("tn" , c)

    const handleClick = (k) => {
        setSel(k) ;
    }

    const liTag = c.map((item, idx) => 
        <li key={`li${idx}`}>
            <button onClick={() => handleClick(item) }>{item}</button>
        </li>
    );
    return (
        <nav>
            <ul>
                <li><strong>{title}</strong></li>
            </ul>
            <ul>
                {liTag}
            </ul>
        </nav>
    )
}

export default TaccidentNav;
