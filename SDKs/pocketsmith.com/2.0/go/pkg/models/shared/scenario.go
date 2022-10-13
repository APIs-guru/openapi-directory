package shared

type ScenarioTypeEnum string

const (
	ScenarioTypeEnumNoInterest ScenarioTypeEnum = "no-interest"
	ScenarioTypeEnumSavings    ScenarioTypeEnum = "savings"
	ScenarioTypeEnumDebt       ScenarioTypeEnum = "debt"
)

type Scenario struct {
	AchieveDate                  *string           `json:"achieve_date"`
	ClosingBalance               *float64          `json:"closing_balance"`
	ClosingBalanceDate           *string           `json:"closing_balance_date"`
	CreatedAt                    *string           `json:"created_at"`
	CurrentBalance               *float64          `json:"current_balance"`
	CurrentBalanceDate           *string           `json:"current_balance_date"`
	CurrentBalanceExchangeRate   *float64          `json:"current_balance_exchange_rate"`
	CurrentBalanceInBaseCurrency *float64          `json:"current_balance_in_base_currency"`
	Description                  *string           `json:"description"`
	ID                           *int64            `json:"id"`
	InterestRate                 *float64          `json:"interest_rate"`
	InterestRateRepeatID         *int64            `json:"interest_rate_repeat_id"`
	MaximumValue                 *float64          `json:"maximum-value"`
	MinimumValue                 *float64          `json:"minimum-value"`
	SafeBalance                  *float64          `json:"safe_balance"`
	SafeBalanceInBaseCurrency    *float64          `json:"safe_balance_in_base_currency"`
	StartingBalance              *float64          `json:"starting_balance"`
	StartingBalanceDate          *string           `json:"starting_balance_date"`
	Title                        *string           `json:"title"`
	Type                         *ScenarioTypeEnum `json:"type"`
	UpdatedAt                    *string           `json:"updated_at"`
}
