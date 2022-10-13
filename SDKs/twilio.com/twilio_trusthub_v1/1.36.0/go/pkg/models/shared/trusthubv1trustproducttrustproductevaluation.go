package shared

import (
	"time"
)

type TrusthubV1TrustProductTrustProductEvaluation struct {
	AccountSid      *string                               `json:"account_sid"`
	DateCreated     *time.Time                            `json:"date_created"`
	PolicySid       *string                               `json:"policy_sid"`
	Results         []interface{}                         `json:"results"`
	Sid             *string                               `json:"sid"`
	Status          *TrustProductEvaluationEnumStatusEnum `json:"status"`
	TrustProductSid *string                               `json:"trust_product_sid"`
	URL             *string                               `json:"url"`
}
