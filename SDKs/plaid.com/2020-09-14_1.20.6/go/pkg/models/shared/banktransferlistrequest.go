package shared

import (
"time")

type BankTransferListRequest struct {
    ClientID *string `json:"client_id,omitempty"`
    Count *int64 `json:"count,omitempty"`
    Direction *BankTransferDirectionEnum `json:"direction,omitempty"`
    EndDate *time.Time `json:"end_date,omitempty"`
    Offset *int64 `json:"offset,omitempty"`
    OriginationAccountID *string `json:"origination_account_id,omitempty"`
    Secret *string `json:"secret,omitempty"`
    StartDate *time.Time `json:"start_date,omitempty"`
    
}

