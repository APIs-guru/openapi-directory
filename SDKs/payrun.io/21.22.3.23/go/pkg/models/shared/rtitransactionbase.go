package shared

import (
"time")

type RtiTransactionBaseRtiTransactionBaseEmployerCore struct {
    AtHref *string `json:"@href,omitempty"`
    AtRel *string `json:"@rel,omitempty"`
    AtTitle *string `json:"@title,omitempty"`
    
}


type RtiTransactionBaseRtiTransactionBaseTransactionStatusEnum string

const (
    RtiTransactionBaseRtiTransactionBaseTransactionStatusEnumNew RtiTransactionBaseRtiTransactionBaseTransactionStatusEnum = "New"
RtiTransactionBaseRtiTransactionBaseTransactionStatusEnumRequestGenerated RtiTransactionBaseRtiTransactionBaseTransactionStatusEnum = "RequestGenerated"
RtiTransactionBaseRtiTransactionBaseTransactionStatusEnumCompletedWithError RtiTransactionBaseRtiTransactionBaseTransactionStatusEnum = "CompletedWithError"
RtiTransactionBaseRtiTransactionBaseTransactionStatusEnumCompletedWithSuccess RtiTransactionBaseRtiTransactionBaseTransactionStatusEnum = "CompletedWithSuccess"
RtiTransactionBaseRtiTransactionBaseTransactionStatusEnumTimeOut RtiTransactionBaseRtiTransactionBaseTransactionStatusEnum = "TimeOut"
)


type RtiTransactionBaseRtiTransactionBase struct {
    EmployerCore *RtiTransactionBaseRtiTransactionBaseEmployerCore `json:"EmployerCore,omitempty"`
    RequestData *string `json:"RequestData,omitempty"`
    ResponseData *string `json:"ResponseData,omitempty"`
    RtiType *string `json:"RtiType,omitempty"`
    TaxYear *int32 `json:"TaxYear,omitempty"`
    Timestamp *time.Time `json:"Timestamp,omitempty"`
    TransactionStatus *RtiTransactionBaseRtiTransactionBaseTransactionStatusEnum `json:"TransactionStatus,omitempty"`
    TransmissionDate *time.Time `json:"TransmissionDate,omitempty"`
    
}

type RtiTransactionBase struct {
    RtiTransactionBase *RtiTransactionBaseRtiTransactionBase `json:"RtiTransactionBase,omitempty"`
    
}

