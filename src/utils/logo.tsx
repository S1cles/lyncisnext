import { Box } from '@chakra-ui/react';

export const LyncisLogo = () => (
    <Box
        as="svg"
        viewBox="0 0 600 200"
        w="300px"
        h="100px"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="#222">
            <text x="20" y="100" fontFamily="Arial, sans-serif" fontSize="80">L</text>
            <text x="70" y="100" fontFamily="Arial, sans-serif" fontSize="80" fill="#e30613">Y</text>
            <text x="130" y="100" fontFamily="Arial, sans-serif" fontSize="80">N</text>
            <text x="200" y="100" fontFamily="Arial, sans-serif" fontSize="80">C</text>
            <text x="270" y="100" fontFamily="Arial, sans-serif" fontSize="80" fill="#e30613">I</text>
            <text x="300" y="100" fontFamily="Arial, sans-serif" fontSize="80">S</text>
        </g>
        <rect x="20" y="110" width="310" height="6" fill="#222" />
        <g transform="translate(330, 130)" fill="#e30613">
            <path d="M0,-8 L2,-2 L8,0 L2,2 L0,8 L-2,2 L-8,0 L-2,-2 Z" />
        </g>
    </Box>
);