package shared

type SourceAccountResponseV2CurrencyEnum string

const (
	SourceAccountResponseV2CurrencyEnumUsd SourceAccountResponseV2CurrencyEnum = "USD"
)

type SourceAccountResponseV2 struct {
	AccountType         string                               `json:"accountType"`
	AutoTopUpConfig     *AutoTopUpConfig                     `json:"autoTopUpConfig"`
	Balance             *int64                               `json:"balance"`
	BalanceVisible      bool                                 `json:"balanceVisible"`
	Currency            *SourceAccountResponseV2CurrencyEnum `json:"currency"`
	CustomerID          *string                              `json:"customerId"`
	FundingAccountID    *string                              `json:"fundingAccountId"`
	FundingRef          string                               `json:"fundingRef"`
	ID                  string                               `json:"id"`
	Name                *string                              `json:"name"`
	Notifications       *Notifications                       `json:"notifications"`
	PayorID             *string                              `json:"payorId"`
	PhysicalAccountID   *string                              `json:"physicalAccountId"`
	PhysicalAccountName string                               `json:"physicalAccountName"`
	Pooled              bool                                 `json:"pooled"`
	RailsID             string                               `json:"railsId"`
}
