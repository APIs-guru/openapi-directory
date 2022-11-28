package shared

import (
	"time"
)

type PreviewDeployedDevicesFleetKey struct {
	AccountSid   *string    `json:"account_sid,omitempty"`
	DateCreated  *time.Time `json:"date_created,omitempty"`
	DateUpdated  *time.Time `json:"date_updated,omitempty"`
	DeviceSid    *string    `json:"device_sid,omitempty"`
	FleetSid     *string    `json:"fleet_sid,omitempty"`
	FriendlyName *string    `json:"friendly_name,omitempty"`
	Secret       *string    `json:"secret,omitempty"`
	Sid          *string    `json:"sid,omitempty"`
	URL          *string    `json:"url,omitempty"`
}
