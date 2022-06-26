export default function Preference ({onClick = null, className: classes = ''}) {
    return <svg onClick={onClick} className={`text-gray-500 dark:text-gray-100 cursor-pointer ${classes}`} width="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2M12 4A8 8 0 0 1 20 12A8 8 0 0 1 12 20V4Z"></path></svg>
}