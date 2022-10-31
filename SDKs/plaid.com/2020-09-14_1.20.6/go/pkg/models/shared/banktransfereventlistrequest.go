package shared

import (
"time")


type BankTransferEventListRequestBankTransferTypeEnum string

const (
    BankTransferEventListRequestBankTransferTypeEnumDebit BankTransferEventListRequestBankTransferTypeEnum = "debit"
BankTransferEventListRequestBankTransferTypeEnumCredit BankTransferEventListRequestBankTransferTypeEnum = "credit"
)



type BankTransferEventListRequestBankTransferDirectionEnum string

const (
    BankTransferEventListRequestBankTransferDirectionEnumInbound BankTransferEventListRequestBankTransferDirectionEnum = "inbound"
BankTransferEventListRequestBankTransferDirectionEnumOutbound BankTransferEventListRequestBankTransferDirectionEnum = "outbound"
)


type BankTransferEventListRequest struct {
    AccountID *string `json:"account_id,omitempty"`
    BankTransferID *string `json:"bank_transfer_id,omitempty"`
    BankTransferType *BankTransferEventListRequestBankTransferTypeEnum `json:"bank_transfer_type,omitempty"`
    ClientID *string `json:"client_id,omitempty"`
    Count *int64 `json:"count,omitempty"`
    Direction *BankTransferEventListRequestBankTransferDirectionEnum `json:"direction,omitempty"`
    EndDate *time.Time `json:"end_date,omitempty"`
    EventTypes []BankTransferEventTypeEnum `json:"event_types,omitempty"`
    Offset *int64 `json:"offset,omitempty"`
    OriginationAccountID *string `json:"origination_account_id,omitempty"`
    Secret *string `json:"secret,omitempty"`
    StartDate *time.Time `json:"start_date,omitempty"`
    
}

