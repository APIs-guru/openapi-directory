package shared

import (
	"time"
)

type PrepaidBalanceInfo struct {
	Balance            *int32     `json:"balance"`
	LatestTopUp        *time.Time `json:"latestTopUp"`
	PendingTransaction *bool      `json:"pendingTransaction"`
}
