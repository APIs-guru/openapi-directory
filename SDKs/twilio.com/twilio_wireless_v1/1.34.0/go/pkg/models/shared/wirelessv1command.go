package shared

import (
	"time"
)

type WirelessV1Command struct {
	AccountSid               *string                     `json:"account_sid"`
	Command                  *string                     `json:"command"`
	CommandMode              *CommandEnumCommandModeEnum `json:"command_mode"`
	DateCreated              *time.Time                  `json:"date_created"`
	DateUpdated              *time.Time                  `json:"date_updated"`
	DeliveryReceiptRequested *bool                       `json:"delivery_receipt_requested"`
	Direction                *CommandEnumDirectionEnum   `json:"direction"`
	Sid                      *string                     `json:"sid"`
	SimSid                   *string                     `json:"sim_sid"`
	Status                   *CommandEnumStatusEnum      `json:"status"`
	Transport                *CommandEnumTransportEnum   `json:"transport"`
	URL                      *string                     `json:"url"`
}
