package shared

import (
	"time"
)

type BankTransferEventListRequestBankTransferTypeBankTransferTypeEnum string

const (
	BankTransferEventListRequestBankTransferTypeBankTransferTypeEnumDebit  BankTransferEventListRequestBankTransferTypeBankTransferTypeEnum = "debit"
	BankTransferEventListRequestBankTransferTypeBankTransferTypeEnumCredit BankTransferEventListRequestBankTransferTypeBankTransferTypeEnum = "credit"
)

type BankTransferEventListRequestDirectionBankTransferDirectionEnum string

const (
	BankTransferEventListRequestDirectionBankTransferDirectionEnumInbound  BankTransferEventListRequestDirectionBankTransferDirectionEnum = "inbound"
	BankTransferEventListRequestDirectionBankTransferDirectionEnumOutbound BankTransferEventListRequestDirectionBankTransferDirectionEnum = "outbound"
)

type BankTransferEventListRequest struct {
	AccountID            *string                                                           `json:"account_id,omitempty"`
	BankTransferID       *string                                                           `json:"bank_transfer_id,omitempty"`
	BankTransferType     *BankTransferEventListRequestBankTransferTypeBankTransferTypeEnum `json:"bank_transfer_type,omitempty"`
	ClientID             *string                                                           `json:"client_id,omitempty"`
	Count                *int64                                                            `json:"count,omitempty"`
	Direction            *BankTransferEventListRequestDirectionBankTransferDirectionEnum   `json:"direction,omitempty"`
	EndDate              *time.Time                                                        `json:"end_date,omitempty"`
	EventTypes           []BankTransferEventTypeEnum                                       `json:"event_types,omitempty"`
	Offset               *int64                                                            `json:"offset,omitempty"`
	OriginationAccountID *string                                                           `json:"origination_account_id,omitempty"`
	Secret               *string                                                           `json:"secret,omitempty"`
	StartDate            *time.Time                                                        `json:"start_date,omitempty"`
}
