package shared



type MoneyObject struct {
    CurrencyCode string `json:"currencyCode"`
    Value string `json:"value"`
    ValueInBaseUnits int64 `json:"valueInBaseUnits"`
    
}

