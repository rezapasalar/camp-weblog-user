export const random = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const convertLocaleDigits = (value, input = 'fa', output = 'en') => {
    const locales = {fa: ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'], en: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']}
    return (value.split('').map(item => locales[output][locales[input].findIndex(i => i === item)])).join('')
}

export const convertDateToPersianDate = (date, locale = 'fa-IR') => new Date(date).toLocaleDateString(locale, {day: "numeric", month: "long", year: "numeric"})

export const timestampToPersianDate = (timestamp, locale = 'fa-IR') => convertDateToPersianDate(timestamp, locale)

export const getCurrentPersianYear = (digit = 'fa') => digit === 'fa' ? convertDateToPersianDate(Date.now()).split(' ')[2] : convertLocaleDigits(convertDateToPersianDate(Date.now()).split(' ')[2])

export const getTheme = () => (!('theme' in localStorage) || (localStorage.theme !== 'dark' && localStorage.theme !== 'light')) ? {theme: 'light'} : {theme: localStorage.theme}