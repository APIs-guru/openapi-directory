package shared

import (
	"time"
)

type PayLinePayLinePayCodeTypePayCodeTypeEnum string

const (
	PayLinePayLinePayCodeTypePayCodeTypeEnumNotSet    PayLinePayLinePayCodeTypePayCodeTypeEnum = "NotSet"
	PayLinePayLinePayCodeTypePayCodeTypeEnumPayment   PayLinePayLinePayCodeTypePayCodeTypeEnum = "Payment"
	PayLinePayLinePayCodeTypePayCodeTypeEnumDeduction PayLinePayLinePayCodeTypePayCodeTypeEnum = "Deduction"
)

type PayLinePayLinePayLine struct {
	Calculator     *string                                   `json:"Calculator,omitempty"`
	Description    *string                                   `json:"Description,omitempty"`
	Generated      *time.Time                                `json:"Generated,omitempty"`
	PayCode        *string                                   `json:"PayCode,omitempty"`
	PayCodeType    *PayLinePayLinePayCodeTypePayCodeTypeEnum `json:"PayCodeType,omitempty"`
	PayRunSequence *int32                                    `json:"PayRunSequence,omitempty"`
	PaymentDate    *time.Time                                `json:"PaymentDate,omitempty"`
	TaxPeriod      *int32                                    `json:"TaxPeriod,omitempty"`
	TaxYear        *int32                                    `json:"TaxYear,omitempty"`
	Value          *float64                                  `json:"Value,omitempty"`
}

type PayLine struct {
	PayLine *PayLinePayLinePayLine `json:"PayLine,omitempty"`
}
