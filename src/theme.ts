import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({

    colors: {
        red: {
            50: '#fef2f2',
            100: '#fee2e2',
            200: '#ef4444',//123
            300: '#fca5a5',
            400: '#f87171',
            500: '#ef4444',
            600: '#dc2626',
            700: '#991919',
            800: '#511111',
            900: '#300c0c',
        },
    },
    components: {
        Button: {
            variants: {


                solid: (props: { colorScheme: string; colorMode: string; }) => {
                    const { colorScheme, colorMode } = props;

                    if (colorScheme === 'red' && colorMode === 'dark') {
                        return {
                            bg: 'red.500',
                            color: 'white',
                            _hover: {
                                bg: 'red.600',
                            },
                        }
                    }
                    },


                outline: () => ({
                    border: '2px solid',
                    // borderColor: `${props.colorScheme}.500`,
                    color: 'red.500', // фиксированное значение — можно также сделать `${props.colorScheme}.500`
                    _hover: {
                        bg: 'blackAlpha.200',
                        color:'red.400'
                    },
                }),
            },
            defaultProps: {
                variant: 'outline',
                colorScheme: 'red',
            },
        },
    },
})
