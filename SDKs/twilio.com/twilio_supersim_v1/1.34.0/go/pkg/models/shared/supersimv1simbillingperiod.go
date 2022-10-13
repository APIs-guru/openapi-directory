package shared

import (
	"time"
)

type SupersimV1SimBillingPeriod struct {
	AccountSid  *string                      `json:"account_sid"`
	DateCreated *time.Time                   `json:"date_created"`
	DateUpdated *time.Time                   `json:"date_updated"`
	EndTime     *time.Time                   `json:"end_time"`
	PeriodType  *BillingPeriodEnumBpTypeEnum `json:"period_type"`
	Sid         *string                      `json:"sid"`
	SimSid      *string                      `json:"sim_sid"`
	StartTime   *time.Time                   `json:"start_time"`
}
