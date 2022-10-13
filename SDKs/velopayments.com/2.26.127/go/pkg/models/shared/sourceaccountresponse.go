package shared

type SourceAccountResponseCurrencyEnum string

const (
	SourceAccountResponseCurrencyEnumUsd SourceAccountResponseCurrencyEnum = "USD"
)

type SourceAccountResponse struct {
	AccountType         *string                            `json:"accountType"`
	Balance             *int64                             `json:"balance"`
	BalanceVisible      *bool                              `json:"balanceVisible"`
	Currency            *SourceAccountResponseCurrencyEnum `json:"currency"`
	CustomerID          *string                            `json:"customerId"`
	FundingAccountID    *string                            `json:"fundingAccountId"`
	FundingRef          *string                            `json:"fundingRef"`
	ID                  *string                            `json:"id"`
	Name                *string                            `json:"name"`
	PayorID             *string                            `json:"payorId"`
	PhysicalAccountID   *string                            `json:"physicalAccountId"`
	PhysicalAccountName *string                            `json:"physicalAccountName"`
	Pooled              *bool                              `json:"pooled"`
	RailsID             *string                            `json:"railsId"`
}
