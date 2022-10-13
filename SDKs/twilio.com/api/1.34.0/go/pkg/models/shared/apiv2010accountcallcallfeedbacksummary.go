package shared

import (
	"time"
)

type APIV2010AccountCallCallFeedbackSummary struct {
	AccountSid                    *string                            `json:"account_sid"`
	CallCount                     *int64                             `json:"call_count"`
	CallFeedbackCount             *int64                             `json:"call_feedback_count"`
	DateCreated                   *string                            `json:"date_created"`
	DateUpdated                   *string                            `json:"date_updated"`
	EndDate                       *time.Time                         `json:"end_date"`
	IncludeSubaccounts            *bool                              `json:"include_subaccounts"`
	Issues                        []interface{}                      `json:"issues"`
	QualityScoreAverage           *float64                           `json:"quality_score_average"`
	QualityScoreMedian            *float64                           `json:"quality_score_median"`
	QualityScoreStandardDeviation *float64                           `json:"quality_score_standard_deviation"`
	Sid                           *string                            `json:"sid"`
	StartDate                     *time.Time                         `json:"start_date"`
	Status                        *CallFeedbackSummaryEnumStatusEnum `json:"status"`
}
