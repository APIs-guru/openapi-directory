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
	AtHref  *string `json:"@href"`
	AtRel   *string `json:"@rel"`
	AtTitle *string `json:"@title"`
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
	CisMessageType    *CisTransactionCisTransactionCisMessageTypeCisMessageTypeEnum       `json:"CisMessageType"`
	EmployerCore      *CisTransactionCisTransactionEmployerCoreEmployerCore               `json:"EmployerCore"`
	RequestData       *string                                                             `json:"RequestData"`
	ResponseData      *string                                                             `json:"ResponseData"`
	TaxYear           *int32                                                              `json:"TaxYear"`
	Timestamp         *time.Time                                                          `json:"Timestamp"`
	TransactionStatus *CisTransactionCisTransactionTransactionStatusTransactionStatusEnum `json:"TransactionStatus"`
	TransmissionDate  *time.Time                                                          `json:"TransmissionDate"`
}

type CisTransaction struct {
	CisTransaction *CisTransactionCisTransactionCisTransaction `json:"CisTransaction"`
}
