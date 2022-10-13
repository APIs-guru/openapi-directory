package shared

type TransactionAccountTypeEnum string

const (
	TransactionAccountTypeEnumBank           TransactionAccountTypeEnum = "bank"
	TransactionAccountTypeEnumCredits        TransactionAccountTypeEnum = "credits"
	TransactionAccountTypeEnumCash           TransactionAccountTypeEnum = "cash"
	TransactionAccountTypeEnumStocks         TransactionAccountTypeEnum = "stocks"
	TransactionAccountTypeEnumMortgage       TransactionAccountTypeEnum = "mortgage"
	TransactionAccountTypeEnumLoans          TransactionAccountTypeEnum = "loans"
	TransactionAccountTypeEnumVehicle        TransactionAccountTypeEnum = "vehicle"
	TransactionAccountTypeEnumProperty       TransactionAccountTypeEnum = "property"
	TransactionAccountTypeEnumInsurance      TransactionAccountTypeEnum = "insurance"
	TransactionAccountTypeEnumOtherLiability TransactionAccountTypeEnum = "other_liability"
)

type TransactionAccount struct {
	CreatedAt                    *string                     `json:"created_at"`
	CurrencyCode                 *string                     `json:"currency_code"`
	CurrentBalance               *float64                    `json:"current_balance"`
	CurrentBalanceDate           *string                     `json:"current_balance_date"`
	CurrentBalanceExchangeRate   *float64                    `json:"current_balance_exchange_rate"`
	CurrentBalanceInBaseCurrency *float64                    `json:"current_balance_in_base_currency"`
	ID                           *int64                      `json:"id"`
	Institution                  *Institution                `json:"institution"`
	Name                         *string                     `json:"name"`
	Number                       *string                     `json:"number"`
	SafeBalance                  *float64                    `json:"safe_balance"`
	SafeBalanceInBaseCurrency    *float64                    `json:"safe_balance_in_base_currency"`
	StartingBalance              *float64                    `json:"starting_balance"`
	StartingBalanceDate          *string                     `json:"starting_balance_date"`
	Type                         *TransactionAccountTypeEnum `json:"type"`
	UpdatedAt                    *string                     `json:"updated_at"`
}
