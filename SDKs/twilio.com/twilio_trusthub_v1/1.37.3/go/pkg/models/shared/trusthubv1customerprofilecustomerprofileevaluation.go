package shared

import (
	"time"
)

type TrusthubV1CustomerProfileCustomerProfileEvaluation struct {
	AccountSid         *string                                  `json:"account_sid,omitempty"`
	CustomerProfileSid *string                                  `json:"customer_profile_sid,omitempty"`
	DateCreated        *time.Time                               `json:"date_created,omitempty"`
	PolicySid          *string                                  `json:"policy_sid,omitempty"`
	Results            []interface{}                            `json:"results,omitempty"`
	Sid                *string                                  `json:"sid,omitempty"`
	Status             *CustomerProfileEvaluationEnumStatusEnum `json:"status,omitempty"`
	URL                *string                                  `json:"url,omitempty"`
}
