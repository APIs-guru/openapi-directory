package shared

import (
	"time"
)

type SupersimV1SimBillingPeriod struct {
	AccountSid  *string                      `json:"account_sid,omitempty"`
	DateCreated *time.Time                   `json:"date_created,omitempty"`
	DateUpdated *time.Time                   `json:"date_updated,omitempty"`
	EndTime     *time.Time                   `json:"end_time,omitempty"`
	PeriodType  *BillingPeriodEnumBpTypeEnum `json:"period_type,omitempty"`
	Sid         *string                      `json:"sid,omitempty"`
	SimSid      *string                      `json:"sim_sid,omitempty"`
	StartTime   *time.Time                   `json:"start_time,omitempty"`
}
