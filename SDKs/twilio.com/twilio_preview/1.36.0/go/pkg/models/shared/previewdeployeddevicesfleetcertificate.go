package shared

import (
	"time"
)

type PreviewDeployedDevicesFleetCertificate struct {
	AccountSid   *string    `json:"account_sid,omitempty"`
	DateCreated  *time.Time `json:"date_created,omitempty"`
	DateUpdated  *time.Time `json:"date_updated,omitempty"`
	DeviceSid    *string    `json:"device_sid,omitempty"`
	FleetSid     *string    `json:"fleet_sid,omitempty"`
	FriendlyName *string    `json:"friendly_name,omitempty"`
	Sid          *string    `json:"sid,omitempty"`
	Thumbprint   *string    `json:"thumbprint,omitempty"`
	URL          *string    `json:"url,omitempty"`
}
