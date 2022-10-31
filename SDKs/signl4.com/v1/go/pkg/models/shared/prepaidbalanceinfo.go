package shared

import (
"time")

type PrepaidBalanceInfo struct {
    Balance *int32 `json:"balance,omitempty"`
    LatestTopUp *time.Time `json:"latestTopUp,omitempty"`
    PendingTransaction *bool `json:"pendingTransaction,omitempty"`
    
}

