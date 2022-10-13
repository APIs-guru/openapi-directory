package shared

import (
	"time"
)

type BankTransferListRequest struct {
	ClientID             *string                    `json:"client_id"`
	Count                *int64                     `json:"count"`
	Direction            *BankTransferDirectionEnum `json:"direction"`
	EndDate              *time.Time                 `json:"end_date"`
	Offset               *int64                     `json:"offset"`
	OriginationAccountID *string                    `json:"origination_account_id"`
	Secret               *string                    `json:"secret"`
	StartDate            *time.Time                 `json:"start_date"`
}
