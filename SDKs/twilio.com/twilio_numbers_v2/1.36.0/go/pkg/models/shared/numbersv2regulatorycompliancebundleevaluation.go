package shared

import (
	"time"
)

type NumbersV2RegulatoryComplianceBundleEvaluation struct {
	AccountSid    *string                   `json:"account_sid"`
	BundleSid     *string                   `json:"bundle_sid"`
	DateCreated   *time.Time                `json:"date_created"`
	RegulationSid *string                   `json:"regulation_sid"`
	Results       []interface{}             `json:"results"`
	Sid           *string                   `json:"sid"`
	Status        *EvaluationEnumStatusEnum `json:"status"`
	URL           *string                   `json:"url"`
}
