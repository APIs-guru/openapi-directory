package shared

type AccountTypeEnum string

const (
	AccountTypeEnumBank           AccountTypeEnum = "bank"
	AccountTypeEnumCredits        AccountTypeEnum = "credits"
	AccountTypeEnumCash           AccountTypeEnum = "cash"
	AccountTypeEnumStocks         AccountTypeEnum = "stocks"
	AccountTypeEnumMortgage       AccountTypeEnum = "mortgage"
	AccountTypeEnumLoans          AccountTypeEnum = "loans"
	AccountTypeEnumVehicle        AccountTypeEnum = "vehicle"
	AccountTypeEnumProperty       AccountTypeEnum = "property"
	AccountTypeEnumInsurance      AccountTypeEnum = "insurance"
	AccountTypeEnumOtherLiability AccountTypeEnum = "other_liability"
)

type Account struct {
	CreatedAt                    *string              `json:"created_at"`
	CurrencyCode                 *string              `json:"currency_code"`
	CurrentBalance               *float64             `json:"current_balance"`
	CurrentBalanceDate           *string              `json:"current_balance_date"`
	CurrentBalanceExchangeRate   *float64             `json:"current_balance_exchange_rate"`
	CurrentBalanceInBaseCurrency *float64             `json:"current_balance_in_base_currency"`
	ID                           *int64               `json:"id"`
	IsNetWorth                   *bool                `json:"is_net_worth"`
	PrimaryScenario              *Scenario            `json:"primary_scenario"`
	PrimaryTransactionAccount    *TransactionAccount  `json:"primary_transaction_account"`
	SafeBalance                  *float64             `json:"safe_balance"`
	SafeBalanceInBaseCurrency    *float64             `json:"safe_balance_in_base_currency"`
	Scenarios                    []Scenario           `json:"scenarios"`
	Title                        *string              `json:"title"`
	TransactionAccounts          []TransactionAccount `json:"transaction_accounts"`
	Type                         *AccountTypeEnum     `json:"type"`
	UpdatedAt                    *string              `json:"updated_at"`
}
