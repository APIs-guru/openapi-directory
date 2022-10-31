package shared

import (
	"time"
)

type WirelessV1Command struct {
	AccountSid               *string                     `json:"account_sid,omitempty"`
	Command                  *string                     `json:"command,omitempty"`
	CommandMode              *CommandEnumCommandModeEnum `json:"command_mode,omitempty"`
	DateCreated              *time.Time                  `json:"date_created,omitempty"`
	DateUpdated              *time.Time                  `json:"date_updated,omitempty"`
	DeliveryReceiptRequested *bool                       `json:"delivery_receipt_requested,omitempty"`
	Direction                *CommandEnumDirectionEnum   `json:"direction,omitempty"`
	Sid                      *string                     `json:"sid,omitempty"`
	SimSid                   *string                     `json:"sim_sid,omitempty"`
	Status                   *CommandEnumStatusEnum      `json:"status,omitempty"`
	Transport                *CommandEnumTransportEnum   `json:"transport,omitempty"`
	URL                      *string                     `json:"url,omitempty"`
}
