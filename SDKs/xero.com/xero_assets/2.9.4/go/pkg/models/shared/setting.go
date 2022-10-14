package shared

import (
	"time"
)

type Setting struct {
	AssetNumberPrefix                     *string    `json:"assetNumberPrefix,omitempty"`
	AssetNumberSequence                   *string    `json:"assetNumberSequence,omitempty"`
	AssetStartDate                        *time.Time `json:"assetStartDate,omitempty"`
	DefaultCapitalGainOnDisposalAccountID *string    `json:"defaultCapitalGainOnDisposalAccountId,omitempty"`
	DefaultGainOnDisposalAccountID        *string    `json:"defaultGainOnDisposalAccountId,omitempty"`
	DefaultLossOnDisposalAccountID        *string    `json:"defaultLossOnDisposalAccountId,omitempty"`
	LastDepreciationDate                  *time.Time `json:"lastDepreciationDate,omitempty"`
	OptInForTax                           *bool      `json:"optInForTax,omitempty"`
}
