export default function TabButton({children, onSelect, isSelected}) {
    console.log('button App componenet run');
    return <li><button className={isSelected ? "active" : undefined} onClick={onSelect}>{children}</button></li>
}