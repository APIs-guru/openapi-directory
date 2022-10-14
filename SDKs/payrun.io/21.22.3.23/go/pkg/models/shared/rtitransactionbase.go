package shared

import (
	"time"
)

type RtiTransactionBaseRtiTransactionBaseEmployerCoreEmployerCore struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
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
	EmployerCore      *RtiTransactionBaseRtiTransactionBaseEmployerCoreEmployerCore               `json:"EmployerCore,omitempty"`
	RequestData       *string                                                                     `json:"RequestData,omitempty"`
	ResponseData      *string                                                                     `json:"ResponseData,omitempty"`
	RtiType           *string                                                                     `json:"RtiType,omitempty"`
	TaxYear           *int32                                                                      `json:"TaxYear,omitempty"`
	Timestamp         *time.Time                                                                  `json:"Timestamp,omitempty"`
	TransactionStatus *RtiTransactionBaseRtiTransactionBaseTransactionStatusTransactionStatusEnum `json:"TransactionStatus,omitempty"`
	TransmissionDate  *time.Time                                                                  `json:"TransmissionDate,omitempty"`
}

type RtiTransactionBase struct {
	RtiTransactionBase *RtiTransactionBaseRtiTransactionBaseRtiTransactionBase `json:"RtiTransactionBase,omitempty"`
}
