package shared

import (
	"time"
)

type FundingAuditFundingTypeEnum string

const (
	FundingAuditFundingTypeEnumAch      FundingAuditFundingTypeEnum = "ACH"
	FundingAuditFundingTypeEnumWire     FundingAuditFundingTypeEnum = "WIRE"
	FundingAuditFundingTypeEnumEmbedded FundingAuditFundingTypeEnum = "EMBEDDED"
)

type FundingAuditStatusEnum string

const (
	FundingAuditStatusEnumPending FundingAuditStatusEnum = "PENDING"
	FundingAuditStatusEnumFailed  FundingAuditStatusEnum = "FAILED"
	FundingAuditStatusEnumCredit  FundingAuditStatusEnum = "CREDIT"
	FundingAuditStatusEnumDebit   FundingAuditStatusEnum = "DEBIT"
)

type FundingAuditTopupTypeEnum string

const (
	FundingAuditTopupTypeEnumAutomatic FundingAuditTopupTypeEnum = "AUTOMATIC"
	FundingAuditTopupTypeEnumManual    FundingAuditTopupTypeEnum = "MANUAL"
)

type FundingAudit struct {
	Amount             *float64                     `json:"amount"`
	Currency           *string                      `json:"currency"`
	DateTime           *time.Time                   `json:"dateTime"`
	Events             []FundingEvent               `json:"events"`
	FundingAccountName *string                      `json:"fundingAccountName"`
	FundingType        *FundingAuditFundingTypeEnum `json:"fundingType"`
	SourceAccountName  *string                      `json:"sourceAccountName"`
	Status             *FundingAuditStatusEnum      `json:"status"`
	TopupType          *FundingAuditTopupTypeEnum   `json:"topupType"`
}
