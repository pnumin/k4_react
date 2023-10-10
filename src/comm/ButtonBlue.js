const ButtonBlue = ({caption, handleClick}) => {
    return (
        <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-4 rounded">
            {caption}
        </button>
    )
}

export default ButtonBlue
