package shared

import (
	"time"
)

type PreviewDeployedDevicesFleetCertificate struct {
	AccountSid   *string    `json:"account_sid"`
	DateCreated  *time.Time `json:"date_created"`
	DateUpdated  *time.Time `json:"date_updated"`
	DeviceSid    *string    `json:"device_sid"`
	FleetSid     *string    `json:"fleet_sid"`
	FriendlyName *string    `json:"friendly_name"`
	Sid          *string    `json:"sid"`
	Thumbprint   *string    `json:"thumbprint"`
	URL          *string    `json:"url"`
}
