package shared

import (
	"time"
)

type RtiTransactionBaseRtiTransactionBaseEmployerCoreEmployerCore struct {
	AtHref  *string `json:"@href"`
	AtRel   *string `json:"@rel"`
	AtTitle *string `json:"@title"`
}

type RtiTransactionBaseRtiTransactionBaseTransactionStatusTransactionStatusEnum string

const (
	RtiTransactionBaseRtiTransactionBaseTransactionStatusTransactionStatusEnumNew                  RtiTransactionBaseRtiTransactionBaseTransactionStatusTransactionStatusEnum = "New"
	RtiTransactionBaseRtiTransactionBaseTransactionStatusTransactionStatusEnumRequestGenerated     RtiTransactionBaseRtiTransactionBaseTransactionStatusTransactionStatusEnum = "RequestGenerated"
	RtiTransactionBaseRtiTransactionBaseTransactionStatusTransactionStatusEnumCompletedWithError   RtiTransactionBaseRtiTransactionBaseTransactionStatusTransactionStatusEnum = "CompletedWithError"
	RtiTransactionBaseRtiTransactionBaseTransactionStatusTransactionStatusEnumCompletedWithSuccess RtiTransactionBaseRtiTransactionBaseTransactionStatusTransactionStatusEnum = "CompletedWithSuccess"
	RtiTransactionBaseRtiTransactionBaseTransactionStatusTransactionStatusEnumTimeOut              RtiTransactionBaseRtiTransactionBaseTransactionStatusTransactionStatusEnum = "TimeOut"
)

type RtiTransactionBaseRtiTransactionBaseRtiTransactionBase struct {
	EmployerCore      *RtiTransactionBaseRtiTransactionBaseEmployerCoreEmployerCore               `json:"EmployerCore"`
	RequestData       *string                                                                     `json:"RequestData"`
	ResponseData      *string                                                                     `json:"ResponseData"`
	RtiType           *string                                                                     `json:"RtiType"`
	TaxYear           *int32                                                                      `json:"TaxYear"`
	Timestamp         *time.Time                                                                  `json:"Timestamp"`
	TransactionStatus *RtiTransactionBaseRtiTransactionBaseTransactionStatusTransactionStatusEnum `json:"TransactionStatus"`
	TransmissionDate  *time.Time                                                                  `json:"TransmissionDate"`
}

type RtiTransactionBase struct {
	RtiTransactionBase *RtiTransactionBaseRtiTransactionBaseRtiTransactionBase `json:"RtiTransactionBase"`
}
