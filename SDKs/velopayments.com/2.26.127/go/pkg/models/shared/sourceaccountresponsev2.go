package shared

type SourceAccountResponseV2CurrencyEnum string

const (
	SourceAccountResponseV2CurrencyEnumUsd SourceAccountResponseV2CurrencyEnum = "USD"
)

type SourceAccountResponseV2 struct {
	AccountType         string                               `json:"accountType"`
	AutoTopUpConfig     *AutoTopUpConfig                     `json:"autoTopUpConfig,omitempty"`
	Balance             *int64                               `json:"balance,omitempty"`
	BalanceVisible      bool                                 `json:"balanceVisible"`
	Currency            *SourceAccountResponseV2CurrencyEnum `json:"currency,omitempty"`
	CustomerID          *string                              `json:"customerId,omitempty"`
	FundingAccountID    *string                              `json:"fundingAccountId,omitempty"`
	FundingRef          string                               `json:"fundingRef"`
	ID                  string                               `json:"id"`
	Name                *string                              `json:"name,omitempty"`
	Notifications       *Notifications                       `json:"notifications,omitempty"`
	PayorID             *string                              `json:"payorId,omitempty"`
	PhysicalAccountID   *string                              `json:"physicalAccountId,omitempty"`
	PhysicalAccountName string                               `json:"physicalAccountName"`
	Pooled              bool                                 `json:"pooled"`
	RailsID             string                               `json:"railsId"`
}
