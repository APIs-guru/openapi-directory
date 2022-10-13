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
	Calculator     *string                                   `json:"Calculator"`
	Description    *string                                   `json:"Description"`
	Generated      *time.Time                                `json:"Generated"`
	PayCode        *string                                   `json:"PayCode"`
	PayCodeType    *PayLinePayLinePayCodeTypePayCodeTypeEnum `json:"PayCodeType"`
	PayRunSequence *int32                                    `json:"PayRunSequence"`
	PaymentDate    *time.Time                                `json:"PaymentDate"`
	TaxPeriod      *int32                                    `json:"TaxPeriod"`
	TaxYear        *int32                                    `json:"TaxYear"`
	Value          *float64                                  `json:"Value"`
}

type PayLine struct {
	PayLine *PayLinePayLinePayLine `json:"PayLine"`
}
