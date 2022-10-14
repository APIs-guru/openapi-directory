package shared

type ScenarioTypeEnum string

const (
	ScenarioTypeEnumNoInterest ScenarioTypeEnum = "no-interest"
	ScenarioTypeEnumSavings    ScenarioTypeEnum = "savings"
	ScenarioTypeEnumDebt       ScenarioTypeEnum = "debt"
)

type Scenario struct {
	AchieveDate                  *string           `json:"achieve_date,omitempty"`
	ClosingBalance               *float64          `json:"closing_balance,omitempty"`
	ClosingBalanceDate           *string           `json:"closing_balance_date,omitempty"`
	CreatedAt                    *string           `json:"created_at,omitempty"`
	CurrentBalance               *float64          `json:"current_balance,omitempty"`
	CurrentBalanceDate           *string           `json:"current_balance_date,omitempty"`
	CurrentBalanceExchangeRate   *float64          `json:"current_balance_exchange_rate,omitempty"`
	CurrentBalanceInBaseCurrency *float64          `json:"current_balance_in_base_currency,omitempty"`
	Description                  *string           `json:"description,omitempty"`
	ID                           *int64            `json:"id,omitempty"`
	InterestRate                 *float64          `json:"interest_rate,omitempty"`
	InterestRateRepeatID         *int64            `json:"interest_rate_repeat_id,omitempty"`
	MaximumValue                 *float64          `json:"maximum-value,omitempty"`
	MinimumValue                 *float64          `json:"minimum-value,omitempty"`
	SafeBalance                  *float64          `json:"safe_balance,omitempty"`
	SafeBalanceInBaseCurrency    *float64          `json:"safe_balance_in_base_currency,omitempty"`
	StartingBalance              *float64          `json:"starting_balance,omitempty"`
	StartingBalanceDate          *string           `json:"starting_balance_date,omitempty"`
	Title                        *string           `json:"title,omitempty"`
	Type                         *ScenarioTypeEnum `json:"type,omitempty"`
	UpdatedAt                    *string           `json:"updated_at,omitempty"`
}
