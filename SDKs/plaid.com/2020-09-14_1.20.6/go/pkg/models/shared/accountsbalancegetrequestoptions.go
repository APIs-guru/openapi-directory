package shared

import (
	"time"
)

// AccountsBalanceGetRequestOptions
// An optional object to filter `/accounts/balance/get` results.
type AccountsBalanceGetRequestOptions struct {
	AccountIds             []string   `json:"account_ids,omitempty"`
	MinLastUpdatedDatetime *time.Time `json:"min_last_updated_datetime,omitempty"`
}
