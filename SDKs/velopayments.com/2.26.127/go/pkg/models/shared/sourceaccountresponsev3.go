package shared

import (
	"time"
)

type SourceAccountResponseV3CurrencyEnum string

const (
	SourceAccountResponseV3CurrencyEnumUsd SourceAccountResponseV3CurrencyEnum = "USD"
	SourceAccountResponseV3CurrencyEnumEur SourceAccountResponseV3CurrencyEnum = "EUR"
	SourceAccountResponseV3CurrencyEnumGbp SourceAccountResponseV3CurrencyEnum = "GBP"
	SourceAccountResponseV3CurrencyEnumCad SourceAccountResponseV3CurrencyEnum = "CAD"
	SourceAccountResponseV3CurrencyEnumHkd SourceAccountResponseV3CurrencyEnum = "HKD"
)

type SourceAccountResponseV3 struct {
	AutoTopUpConfig     *AutoTopUpConfig2                    `json:"autoTopUpConfig"`
	Balance             *int64                               `json:"balance"`
	Country             *string                              `json:"country"`
	Currency            *SourceAccountResponseV3CurrencyEnum `json:"currency"`
	CustomerID          *string                              `json:"customerId"`
	Deleted             *bool                                `json:"deleted"`
	DeletedAt           *time.Time                           `json:"deletedAt"`
	FundingRef          *string                              `json:"fundingRef"`
	ID                  string                               `json:"id"`
	Name                *string                              `json:"name"`
	Notifications       *Notifications2                      `json:"notifications"`
	PayorID             *string                              `json:"payorId"`
	PhysicalAccountID   *string                              `json:"physicalAccountId"`
	PhysicalAccountName *string                              `json:"physicalAccountName"`
	Pooled              *bool                                `json:"pooled"`
	RailsID             string                               `json:"railsId"`
	Type                string                               `json:"type"`
	UserDeleted         *bool                                `json:"userDeleted"`
}
