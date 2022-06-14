export default function TextAreaElement ({rows = 5, value = '', size = 'lg', widthFull = true, dir = 'rtl', placeholder = '', className: classes = '', onChange = null}) {

    const getSize = () => {
        switch (size) {
            case 'xs' : return 'text-xs px-2 py-1'
            case 'sm' : return 'text-sm px-2 py-1'
            case 'md' : return 'text-md px-4 py-2'
            case 'lg' : return 'text-lg px-5 py-3'
            case 'xl' : return 'text-xl px-5 py-3'
        }
    }

    return (
        <textarea 
            rows={rows}
            value={value}
            dir={dir}
            placeholder={placeholder}
            onChange={onChange}
            className={`${getSize()} ${widthFull ? 'w-full' : ''} text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-900 p-3 mt-1 rounded-lg outline-none border dark:border-gray-800 border-gray-300 focus:ring-2 ${classes}`}
        >
        </textarea>
    )
}