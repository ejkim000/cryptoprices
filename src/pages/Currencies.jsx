import { Link } from 'react-router-dom';

function Currencies() {

    const currencies = [
        { name: "Bitcoin", symbol: "BTC" },
        { name: "Litecoin", symbol: "LTC" },
        { name: "Ethereum", symbol: "ETH" },
        { name: "Ethereum Classic", symbol: "ETC" },
        { name: "Stellar Lumens", symbol: "XLM" },
        { name: "Dash", symbol: "DASH" },
        { name: "Ripple", symbol: "XRP" },
        { name: "Zcash", symbol: "ZEC" },
    ];

    return (
        <div>
            {currencies.map((coin, i) => {
                const { name, symbol } = coin;

                return (
                    <Link key={i} to={`/price/${symbol}`}>
                        <h2>{name}</h2>
                    </Link>
                );
            })}

        </div>
    )
}

export default Currencies