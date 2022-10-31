package shared

type SourceAccountResponseCurrencyEnum string

const (
	SourceAccountResponseCurrencyEnumUsd SourceAccountResponseCurrencyEnum = "USD"
)

type SourceAccountResponse struct {
	AccountType         *string                            `json:"accountType,omitempty"`
	Balance             *int64                             `json:"balance,omitempty"`
	BalanceVisible      *bool                              `json:"balanceVisible,omitempty"`
	Currency            *SourceAccountResponseCurrencyEnum `json:"currency,omitempty"`
	CustomerID          *string                            `json:"customerId,omitempty"`
	FundingAccountID    *string                            `json:"fundingAccountId,omitempty"`
	FundingRef          *string                            `json:"fundingRef,omitempty"`
	ID                  *string                            `json:"id,omitempty"`
	Name                *string                            `json:"name,omitempty"`
	PayorID             *string                            `json:"payorId,omitempty"`
	PhysicalAccountID   *string                            `json:"physicalAccountId,omitempty"`
	PhysicalAccountName *string                            `json:"physicalAccountName,omitempty"`
	Pooled              *bool                              `json:"pooled,omitempty"`
	RailsID             *string                            `json:"railsId,omitempty"`
}
