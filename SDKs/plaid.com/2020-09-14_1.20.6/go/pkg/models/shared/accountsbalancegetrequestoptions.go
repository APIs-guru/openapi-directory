package shared

import (
"time")

type AccountsBalanceGetRequestOptions struct {
    AccountIds []string `json:"account_ids,omitempty"`
    MinLastUpdatedDatetime *time.Time `json:"min_last_updated_datetime,omitempty"`
    
}

