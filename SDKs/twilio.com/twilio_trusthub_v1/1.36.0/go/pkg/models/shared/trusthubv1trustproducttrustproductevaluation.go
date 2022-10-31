package shared

import (
	"time"
)

type TrusthubV1TrustProductTrustProductEvaluation struct {
	AccountSid      *string                               `json:"account_sid,omitempty"`
	DateCreated     *time.Time                            `json:"date_created,omitempty"`
	PolicySid       *string                               `json:"policy_sid,omitempty"`
	Results         []interface{}                         `json:"results,omitempty"`
	Sid             *string                               `json:"sid,omitempty"`
	Status          *TrustProductEvaluationEnumStatusEnum `json:"status,omitempty"`
	TrustProductSid *string                               `json:"trust_product_sid,omitempty"`
	URL             *string                               `json:"url,omitempty"`
}
