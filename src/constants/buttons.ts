type ButtonConfig = {
    symbol: string;
    background: string;
    size: string;
};

const buttons: ButtonConfig[] = [
    //first row
    { symbol: 'AC', background: 'bg-secondary', size: 'col-span-1' },
    { symbol: 'DE', background: 'bg-secondary', size: 'col-span-1' },
    { symbol: '.', background: 'bg-secondary', size: 'col-span-1' },
    { symbol: '÷', background: 'bg-secondary', size: 'col-span-1' },
    //second row
    { symbol: '7', background: 'bg-primary', size: 'col-span-1' },
    { symbol: '8', background: 'bg-primary', size: 'col-span-1' },
    { symbol: '9', background: 'bg-primary', size: 'col-span-1' },
    { symbol: '×', background: 'bg-secondary', size: 'col-span-1' },
    //third row
    { symbol: '4', background: 'bg-primary', size: 'col-span-1' },
    { symbol: '5', background: 'bg-primary', size: 'col-span-1' },
    { symbol: '6', background: 'bg-primary', size: 'col-span-1' },
    { symbol: '-', background: 'bg-secondary', size: 'col-span-1' },
    //fourth row
    { symbol: '1', background: 'bg-primary', size: 'col-span-1' },
    { symbol: '2', background: 'bg-primary', size: 'col-span-1' },
    { symbol: '3', background: 'bg-primary', size: 'col-span-1' },
    { symbol: '+', background: 'bg-secondary', size: 'col-span-1' },
    //fifth row
    { symbol: '0', background: 'bg-primary', size: 'col-span-1' },
    { symbol: '00', background: 'bg-primary', size: 'col-span-1' },
    { symbol: '=', background: 'bg-secondary', size: 'col-span-2' },
];

export { buttons }
