package shared

import (
	"time"
)

type PreviewWirelessCommand struct {
	AccountSid  *string    `json:"account_sid,omitempty"`
	Command     *string    `json:"command,omitempty"`
	CommandMode *string    `json:"command_mode,omitempty"`
	DateCreated *time.Time `json:"date_created,omitempty"`
	DateUpdated *time.Time `json:"date_updated,omitempty"`
	DeviceSid   *string    `json:"device_sid,omitempty"`
	Direction   *string    `json:"direction,omitempty"`
	Sid         *string    `json:"sid,omitempty"`
	SimSid      *string    `json:"sim_sid,omitempty"`
	Status      *string    `json:"status,omitempty"`
	URL         *string    `json:"url,omitempty"`
}
