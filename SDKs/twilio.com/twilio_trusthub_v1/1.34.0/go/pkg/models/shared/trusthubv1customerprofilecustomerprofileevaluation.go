package shared

import (
	"time"
)

type TrusthubV1CustomerProfileCustomerProfileEvaluation struct {
	AccountSid         *string                                  `json:"account_sid"`
	CustomerProfileSid *string                                  `json:"customer_profile_sid"`
	DateCreated        *time.Time                               `json:"date_created"`
	PolicySid          *string                                  `json:"policy_sid"`
	Results            []interface{}                            `json:"results"`
	Sid                *string                                  `json:"sid"`
	Status             *CustomerProfileEvaluationEnumStatusEnum `json:"status"`
	URL                *string                                  `json:"url"`
}
