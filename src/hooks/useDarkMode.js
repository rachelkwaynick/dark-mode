import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = (bool) => {
    const [someValue, setSomeValue] = useLocalStorage('darkMode', bool);

    return [someValue, setSomeValue]
}
