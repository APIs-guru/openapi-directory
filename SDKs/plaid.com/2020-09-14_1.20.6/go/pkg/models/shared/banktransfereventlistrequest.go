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
	AccountID            *string                                                           `json:"account_id"`
	BankTransferID       *string                                                           `json:"bank_transfer_id"`
	BankTransferType     *BankTransferEventListRequestBankTransferTypeBankTransferTypeEnum `json:"bank_transfer_type"`
	ClientID             *string                                                           `json:"client_id"`
	Count                *int64                                                            `json:"count"`
	Direction            *BankTransferEventListRequestDirectionBankTransferDirectionEnum   `json:"direction"`
	EndDate              *time.Time                                                        `json:"end_date"`
	EventTypes           []BankTransferEventTypeEnum                                       `json:"event_types"`
	Offset               *int64                                                            `json:"offset"`
	OriginationAccountID *string                                                           `json:"origination_account_id"`
	Secret               *string                                                           `json:"secret"`
	StartDate            *time.Time                                                        `json:"start_date"`
}
