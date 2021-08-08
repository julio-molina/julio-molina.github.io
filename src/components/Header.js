import Button from './button'

const Header = () => {
    return (
        <header className = 'header'>
            <h1 style={{ color: 'red', backgroundColor: 'black'}}>PI Control Center</h1>
            <h2>Light Control</h2>
            <Button color = 'green' text = 'ON' />
        </header>
    )
}

export default Header
