export function useCurrency() {
    const formatPrice = (value: number) => {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    return {
        formatPrice
    };
}
