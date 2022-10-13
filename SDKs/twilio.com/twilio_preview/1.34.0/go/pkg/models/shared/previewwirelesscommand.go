package shared

import (
	"time"
)

type PreviewWirelessCommand struct {
	AccountSid  *string    `json:"account_sid"`
	Command     *string    `json:"command"`
	CommandMode *string    `json:"command_mode"`
	DateCreated *time.Time `json:"date_created"`
	DateUpdated *time.Time `json:"date_updated"`
	DeviceSid   *string    `json:"device_sid"`
	Direction   *string    `json:"direction"`
	Sid         *string    `json:"sid"`
	SimSid      *string    `json:"sim_sid"`
	Status      *string    `json:"status"`
	URL         *string    `json:"url"`
}
