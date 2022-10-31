package shared

import (
"time")


type FundingAuditFundingTypeEnum string

const (
    FundingAuditFundingTypeEnumAch FundingAuditFundingTypeEnum = "ACH"
FundingAuditFundingTypeEnumWire FundingAuditFundingTypeEnum = "WIRE"
FundingAuditFundingTypeEnumEmbedded FundingAuditFundingTypeEnum = "EMBEDDED"
)



type FundingAuditStatusEnum string

const (
    FundingAuditStatusEnumPending FundingAuditStatusEnum = "PENDING"
FundingAuditStatusEnumFailed FundingAuditStatusEnum = "FAILED"
FundingAuditStatusEnumCredit FundingAuditStatusEnum = "CREDIT"
FundingAuditStatusEnumDebit FundingAuditStatusEnum = "DEBIT"
)



type FundingAuditTopupTypeEnum string

const (
    FundingAuditTopupTypeEnumAutomatic FundingAuditTopupTypeEnum = "AUTOMATIC"
FundingAuditTopupTypeEnumManual FundingAuditTopupTypeEnum = "MANUAL"
)


type FundingAudit struct {
    Amount *float64 `json:"amount,omitempty"`
    Currency *string `json:"currency,omitempty"`
    DateTime *time.Time `json:"dateTime,omitempty"`
    Events []FundingEvent `json:"events,omitempty"`
    FundingAccountName *string `json:"fundingAccountName,omitempty"`
    FundingType *FundingAuditFundingTypeEnum `json:"fundingType,omitempty"`
    SourceAccountName *string `json:"sourceAccountName,omitempty"`
    Status *FundingAuditStatusEnum `json:"status,omitempty"`
    TopupType *FundingAuditTopupTypeEnum `json:"topupType,omitempty"`
    
}

