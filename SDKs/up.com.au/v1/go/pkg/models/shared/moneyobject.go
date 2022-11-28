package shared

// MoneyObject
// Provides information about a value of money.
type MoneyObject struct {
	CurrencyCode     string `json:"currencyCode"`
	Value            string `json:"value"`
	ValueInBaseUnits int64  `json:"valueInBaseUnits"`
}
