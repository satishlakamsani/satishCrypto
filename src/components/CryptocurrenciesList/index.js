// Write your JS code here
import {Component} from 'react'

import CryptoCurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptoCurrenciesList extends Component {
  renderCryptoCurrenciesHeader = () => (
    <div className="list-header">
      <p className="list-coin-type-heading">Coin Type</p>
      <div className="usd-and-euro-values-container">
        <p className="list-value-coin-heading">USD</p>
        <p className="list-value-coin-heading">EURO</p>
      </div>
    </div>
  )

  renderCryptoCurrenciesView = () => {
    const {cryptoCurrenciesData} = this.props

    return (
      <div className="crypto-currencies-list">
        {this.renderCryptoCurrenciesHeader()}
        <ul className="list-body">
          {cryptoCurrenciesData.map(eachCryptoCurrencyData => (
            <CryptoCurrencyItem
              key={eachCryptoCurrencyData.id}
              cryptoCurrencyData={eachCryptoCurrencyData}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="crypto-currencies-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          className="crypto-currency-img"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="Cryptocurrency Tracker"
        />
        {this.renderCryptoCurrenciesView()}
      </div>
    )
  }
}
export default CryptoCurrenciesList
