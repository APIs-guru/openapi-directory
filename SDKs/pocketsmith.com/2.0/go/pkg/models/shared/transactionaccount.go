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
	CreatedAt                    *string                     `json:"created_at,omitempty"`
	CurrencyCode                 *string                     `json:"currency_code,omitempty"`
	CurrentBalance               *float64                    `json:"current_balance,omitempty"`
	CurrentBalanceDate           *string                     `json:"current_balance_date,omitempty"`
	CurrentBalanceExchangeRate   *float64                    `json:"current_balance_exchange_rate,omitempty"`
	CurrentBalanceInBaseCurrency *float64                    `json:"current_balance_in_base_currency,omitempty"`
	ID                           *int64                      `json:"id,omitempty"`
	Institution                  *Institution                `json:"institution,omitempty"`
	Name                         *string                     `json:"name,omitempty"`
	Number                       *string                     `json:"number,omitempty"`
	SafeBalance                  *float64                    `json:"safe_balance,omitempty"`
	SafeBalanceInBaseCurrency    *float64                    `json:"safe_balance_in_base_currency,omitempty"`
	StartingBalance              *float64                    `json:"starting_balance,omitempty"`
	StartingBalanceDate          *string                     `json:"starting_balance_date,omitempty"`
	Type                         *TransactionAccountTypeEnum `json:"type,omitempty"`
	UpdatedAt                    *string                     `json:"updated_at,omitempty"`
}
