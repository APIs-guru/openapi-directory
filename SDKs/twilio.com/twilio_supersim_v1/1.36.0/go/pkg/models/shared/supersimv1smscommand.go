package shared

import (
	"time"
)

type SupersimV1SmsCommand struct {
	AccountSid  *string                      `json:"account_sid"`
	DateCreated *time.Time                   `json:"date_created"`
	DateUpdated *time.Time                   `json:"date_updated"`
	Direction   *SmsCommandEnumDirectionEnum `json:"direction"`
	Payload     *string                      `json:"payload"`
	Sid         *string                      `json:"sid"`
	SimSid      *string                      `json:"sim_sid"`
	Status      *SmsCommandEnumStatusEnum    `json:"status"`
	URL         *string                      `json:"url"`
}
