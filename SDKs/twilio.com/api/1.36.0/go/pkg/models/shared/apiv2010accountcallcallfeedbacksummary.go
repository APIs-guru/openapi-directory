package shared

import (
	"time"
)

type APIV2010AccountCallCallFeedbackSummary struct {
	AccountSid                    *string                            `json:"account_sid,omitempty"`
	CallCount                     *int64                             `json:"call_count,omitempty"`
	CallFeedbackCount             *int64                             `json:"call_feedback_count,omitempty"`
	DateCreated                   *string                            `json:"date_created,omitempty"`
	DateUpdated                   *string                            `json:"date_updated,omitempty"`
	EndDate                       *time.Time                         `json:"end_date,omitempty"`
	IncludeSubaccounts            *bool                              `json:"include_subaccounts,omitempty"`
	Issues                        []interface{}                      `json:"issues,omitempty"`
	QualityScoreAverage           *float64                           `json:"quality_score_average,omitempty"`
	QualityScoreMedian            *float64                           `json:"quality_score_median,omitempty"`
	QualityScoreStandardDeviation *float64                           `json:"quality_score_standard_deviation,omitempty"`
	Sid                           *string                            `json:"sid,omitempty"`
	StartDate                     *time.Time                         `json:"start_date,omitempty"`
	Status                        *CallFeedbackSummaryEnumStatusEnum `json:"status,omitempty"`
}
