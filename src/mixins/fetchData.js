export default {
    data() {
        return {
            api: null,
            loaded: false,
            price: 0,
        }
    },
    methods: {
        fetchData(selectedCoin) {
            fetch(`https://economia.awesomeapi.com.br/all/${selectedCoin}`)
            .then(response => response.json())
            .then(response => {
                this.api = response;
                if(selectedCoin === 'USD-BRL' || selectedCoin === 'BRL-USD') {
                    this.price = parseFloat(this.api.USD.bid.replace(',', '.'));
                } else if(selectedCoin == 'CAD-BRL') {
                    this.price = parseFloat(this.api.CAD.bid.replace(',', '.'));
                } else if(selectedCoin == 'EUR-BRL') {
                    this.price = parseFloat(this.api.EUR.bid.replace(',', '.'));
                } else if(selectedCoin == 'BTC-BRL') {
                    this.price = parseFloat(this.api.BTC.bid.replace(',', '.'));
                } 
                this.loaded = true;
                this.valor
            })
        }
    }
};