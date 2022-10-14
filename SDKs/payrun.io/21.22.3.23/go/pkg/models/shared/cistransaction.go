package shared

import (
	"time"
)

type CisTransactionCisTransactionCisMessageTypeCisMessageTypeEnum string

const (
	CisTransactionCisTransactionCisMessageTypeCisMessageTypeEnumVerification CisTransactionCisTransactionCisMessageTypeCisMessageTypeEnum = "Verification"
	CisTransactionCisTransactionCisMessageTypeCisMessageTypeEnumReturn       CisTransactionCisTransactionCisMessageTypeCisMessageTypeEnum = "Return"
)

type CisTransactionCisTransactionEmployerCoreEmployerCore struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
}

type CisTransactionCisTransactionTransactionStatusTransactionStatusEnum string

const (
	CisTransactionCisTransactionTransactionStatusTransactionStatusEnumNew                  CisTransactionCisTransactionTransactionStatusTransactionStatusEnum = "New"
	CisTransactionCisTransactionTransactionStatusTransactionStatusEnumRequestGenerated     CisTransactionCisTransactionTransactionStatusTransactionStatusEnum = "RequestGenerated"
	CisTransactionCisTransactionTransactionStatusTransactionStatusEnumCompletedWithError   CisTransactionCisTransactionTransactionStatusTransactionStatusEnum = "CompletedWithError"
	CisTransactionCisTransactionTransactionStatusTransactionStatusEnumCompletedWithSuccess CisTransactionCisTransactionTransactionStatusTransactionStatusEnum = "CompletedWithSuccess"
	CisTransactionCisTransactionTransactionStatusTransactionStatusEnumTimeOut              CisTransactionCisTransactionTransactionStatusTransactionStatusEnum = "TimeOut"
)

type CisTransactionCisTransactionCisTransaction struct {
	CisMessageType    *CisTransactionCisTransactionCisMessageTypeCisMessageTypeEnum       `json:"CisMessageType,omitempty"`
	EmployerCore      *CisTransactionCisTransactionEmployerCoreEmployerCore               `json:"EmployerCore,omitempty"`
	RequestData       *string                                                             `json:"RequestData,omitempty"`
	ResponseData      *string                                                             `json:"ResponseData,omitempty"`
	TaxYear           *int32                                                              `json:"TaxYear,omitempty"`
	Timestamp         *time.Time                                                          `json:"Timestamp,omitempty"`
	TransactionStatus *CisTransactionCisTransactionTransactionStatusTransactionStatusEnum `json:"TransactionStatus,omitempty"`
	TransmissionDate  *time.Time                                                          `json:"TransmissionDate,omitempty"`
}

type CisTransaction struct {
	CisTransaction *CisTransactionCisTransactionCisTransaction `json:"CisTransaction,omitempty"`
}
