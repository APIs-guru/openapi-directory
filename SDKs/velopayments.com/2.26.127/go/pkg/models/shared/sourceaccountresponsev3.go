package shared

import (
"time")


type SourceAccountResponseV3CurrencyEnum string

const (
    SourceAccountResponseV3CurrencyEnumUsd SourceAccountResponseV3CurrencyEnum = "USD"
SourceAccountResponseV3CurrencyEnumEur SourceAccountResponseV3CurrencyEnum = "EUR"
SourceAccountResponseV3CurrencyEnumGbp SourceAccountResponseV3CurrencyEnum = "GBP"
SourceAccountResponseV3CurrencyEnumCad SourceAccountResponseV3CurrencyEnum = "CAD"
SourceAccountResponseV3CurrencyEnumHkd SourceAccountResponseV3CurrencyEnum = "HKD"
)


type SourceAccountResponseV3 struct {
    AutoTopUpConfig *AutoTopUpConfig2 `json:"autoTopUpConfig,omitempty"`
    Balance *int64 `json:"balance,omitempty"`
    Country *string `json:"country,omitempty"`
    Currency *SourceAccountResponseV3CurrencyEnum `json:"currency,omitempty"`
    CustomerID *string `json:"customerId,omitempty"`
    Deleted *bool `json:"deleted,omitempty"`
    DeletedAt *time.Time `json:"deletedAt,omitempty"`
    FundingRef *string `json:"fundingRef,omitempty"`
    ID string `json:"id"`
    Name *string `json:"name,omitempty"`
    Notifications *Notifications2 `json:"notifications,omitempty"`
    PayorID *string `json:"payorId,omitempty"`
    PhysicalAccountID *string `json:"physicalAccountId,omitempty"`
    PhysicalAccountName *string `json:"physicalAccountName,omitempty"`
    Pooled *bool `json:"pooled,omitempty"`
    RailsID string `json:"railsId"`
    Type string `json:"type"`
    UserDeleted *bool `json:"userDeleted,omitempty"`
    
}

