package shared




type AccountTypeEnum string

const (
    AccountTypeEnumBank AccountTypeEnum = "bank"
AccountTypeEnumCredits AccountTypeEnum = "credits"
AccountTypeEnumCash AccountTypeEnum = "cash"
AccountTypeEnumStocks AccountTypeEnum = "stocks"
AccountTypeEnumMortgage AccountTypeEnum = "mortgage"
AccountTypeEnumLoans AccountTypeEnum = "loans"
AccountTypeEnumVehicle AccountTypeEnum = "vehicle"
AccountTypeEnumProperty AccountTypeEnum = "property"
AccountTypeEnumInsurance AccountTypeEnum = "insurance"
AccountTypeEnumOtherLiability AccountTypeEnum = "other_liability"
)


type Account struct {
    CreatedAt *string `json:"created_at,omitempty"`
    CurrencyCode *string `json:"currency_code,omitempty"`
    CurrentBalance *float64 `json:"current_balance,omitempty"`
    CurrentBalanceDate *string `json:"current_balance_date,omitempty"`
    CurrentBalanceExchangeRate *float64 `json:"current_balance_exchange_rate,omitempty"`
    CurrentBalanceInBaseCurrency *float64 `json:"current_balance_in_base_currency,omitempty"`
    ID *int64 `json:"id,omitempty"`
    IsNetWorth *bool `json:"is_net_worth,omitempty"`
    PrimaryScenario *Scenario `json:"primary_scenario,omitempty"`
    PrimaryTransactionAccount *TransactionAccount `json:"primary_transaction_account,omitempty"`
    SafeBalance *float64 `json:"safe_balance,omitempty"`
    SafeBalanceInBaseCurrency *float64 `json:"safe_balance_in_base_currency,omitempty"`
    Scenarios []Scenario `json:"scenarios,omitempty"`
    Title *string `json:"title,omitempty"`
    TransactionAccounts []TransactionAccount `json:"transaction_accounts,omitempty"`
    Type *AccountTypeEnum `json:"type,omitempty"`
    UpdatedAt *string `json:"updated_at,omitempty"`
    
}

