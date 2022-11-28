package shared

type InvoiceResponseClarificationClarificationCodeEnum string

const (
	InvoiceResponseClarificationClarificationCodeEnumRef InvoiceResponseClarificationClarificationCodeEnum = "REF"
	InvoiceResponseClarificationClarificationCodeEnumLeg InvoiceResponseClarificationClarificationCodeEnum = "LEG"
	InvoiceResponseClarificationClarificationCodeEnumRec InvoiceResponseClarificationClarificationCodeEnum = "REC"
	InvoiceResponseClarificationClarificationCodeEnumQua InvoiceResponseClarificationClarificationCodeEnum = "QUA"
	InvoiceResponseClarificationClarificationCodeEnumDel InvoiceResponseClarificationClarificationCodeEnum = "DEL"
	InvoiceResponseClarificationClarificationCodeEnumPri InvoiceResponseClarificationClarificationCodeEnum = "PRI"
	InvoiceResponseClarificationClarificationCodeEnumQty InvoiceResponseClarificationClarificationCodeEnum = "QTY"
	InvoiceResponseClarificationClarificationCodeEnumItm InvoiceResponseClarificationClarificationCodeEnum = "ITM"
	InvoiceResponseClarificationClarificationCodeEnumPay InvoiceResponseClarificationClarificationCodeEnum = "PAY"
	InvoiceResponseClarificationClarificationCodeEnumUnr InvoiceResponseClarificationClarificationCodeEnum = "UNR"
	InvoiceResponseClarificationClarificationCodeEnumFin InvoiceResponseClarificationClarificationCodeEnum = "FIN"
	InvoiceResponseClarificationClarificationCodeEnumOth InvoiceResponseClarificationClarificationCodeEnum = "OTH"
	InvoiceResponseClarificationClarificationCodeEnumPin InvoiceResponseClarificationClarificationCodeEnum = "PIN"
	InvoiceResponseClarificationClarificationCodeEnumNin InvoiceResponseClarificationClarificationCodeEnum = "NIN"
	InvoiceResponseClarificationClarificationCodeEnumCnf InvoiceResponseClarificationClarificationCodeEnum = "CNF"
	InvoiceResponseClarificationClarificationCodeEnumCnp InvoiceResponseClarificationClarificationCodeEnum = "CNP"
	InvoiceResponseClarificationClarificationCodeEnumCna InvoiceResponseClarificationClarificationCodeEnum = "CNA"
)

type InvoiceResponseClarificationClarificationCodeTypeEnum string

const (
	InvoiceResponseClarificationClarificationCodeTypeEnumOpStatusReason InvoiceResponseClarificationClarificationCodeTypeEnum = "OPStatusReason"
	InvoiceResponseClarificationClarificationCodeTypeEnumOpStatusAction InvoiceResponseClarificationClarificationCodeTypeEnum = "OPStatusAction"
)

// InvoiceResponseClarification
// A clarification for why a received invoice was rejected (RE) or under query (UQ) and what action to take.
type InvoiceResponseClarification struct {
	Clarification         *string                                               `json:"clarification,omitempty"`
	ClarificationCode     InvoiceResponseClarificationClarificationCodeEnum     `json:"clarificationCode"`
	ClarificationCodeType InvoiceResponseClarificationClarificationCodeTypeEnum `json:"clarificationCodeType"`
}
