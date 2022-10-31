package shared

import (
"time")

type NumbersV2RegulatoryComplianceBundleEvaluation struct {
    AccountSid *string `json:"account_sid,omitempty"`
    BundleSid *string `json:"bundle_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    RegulationSid *string `json:"regulation_sid,omitempty"`
    Results []interface{} `json:"results,omitempty"`
    Sid *string `json:"sid,omitempty"`
    Status *EvaluationEnumStatusEnum `json:"status,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

