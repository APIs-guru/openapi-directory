package shared

import (
	"time"
)

type CisTransactionCisTransactionCisMessageTypeEnum string

const (
	CisTransactionCisTransactionCisMessageTypeEnumVerification CisTransactionCisTransactionCisMessageTypeEnum = "Verification"
	CisTransactionCisTransactionCisMessageTypeEnumReturn       CisTransactionCisTransactionCisMessageTypeEnum = "Return"
)

// CisTransactionCisTransactionEmployerCore
// The cis transactions' employer core
type CisTransactionCisTransactionEmployerCore struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
}

type CisTransactionCisTransactionTransactionStatusEnum string

const (
	CisTransactionCisTransactionTransactionStatusEnumNew                  CisTransactionCisTransactionTransactionStatusEnum = "New"
	CisTransactionCisTransactionTransactionStatusEnumRequestGenerated     CisTransactionCisTransactionTransactionStatusEnum = "RequestGenerated"
	CisTransactionCisTransactionTransactionStatusEnumCompletedWithError   CisTransactionCisTransactionTransactionStatusEnum = "CompletedWithError"
	CisTransactionCisTransactionTransactionStatusEnumCompletedWithSuccess CisTransactionCisTransactionTransactionStatusEnum = "CompletedWithSuccess"
	CisTransactionCisTransactionTransactionStatusEnumTimeOut              CisTransactionCisTransactionTransactionStatusEnum = "TimeOut"
)

type CisTransactionCisTransaction struct {
	CisMessageType    *CisTransactionCisTransactionCisMessageTypeEnum    `json:"CisMessageType,omitempty"`
	EmployerCore      *CisTransactionCisTransactionEmployerCore          `json:"EmployerCore,omitempty"`
	RequestData       *string                                            `json:"RequestData,omitempty"`
	ResponseData      *string                                            `json:"ResponseData,omitempty"`
	TaxYear           *int32                                             `json:"TaxYear,omitempty"`
	Timestamp         *time.Time                                         `json:"Timestamp,omitempty"`
	TransactionStatus *CisTransactionCisTransactionTransactionStatusEnum `json:"TransactionStatus,omitempty"`
	TransmissionDate  *time.Time                                         `json:"TransmissionDate,omitempty"`
}

type CisTransaction struct {
	CisTransaction *CisTransactionCisTransaction `json:"CisTransaction,omitempty"`
}
