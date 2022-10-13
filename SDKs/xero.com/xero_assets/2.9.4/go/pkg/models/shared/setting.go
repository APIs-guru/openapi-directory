package shared

import (
	"time"
)

type Setting struct {
	AssetNumberPrefix                     *string    `json:"assetNumberPrefix"`
	AssetNumberSequence                   *string    `json:"assetNumberSequence"`
	AssetStartDate                        *time.Time `json:"assetStartDate"`
	DefaultCapitalGainOnDisposalAccountID *string    `json:"defaultCapitalGainOnDisposalAccountId"`
	DefaultGainOnDisposalAccountID        *string    `json:"defaultGainOnDisposalAccountId"`
	DefaultLossOnDisposalAccountID        *string    `json:"defaultLossOnDisposalAccountId"`
	LastDepreciationDate                  *time.Time `json:"lastDepreciationDate"`
	OptInForTax                           *bool      `json:"optInForTax"`
}
