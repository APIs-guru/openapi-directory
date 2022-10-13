package shared

import (
	"time"
)

type PreviewDeployedDevicesFleetDeployment struct {
	AccountSid     *string    `json:"account_sid"`
	DateCreated    *time.Time `json:"date_created"`
	DateUpdated    *time.Time `json:"date_updated"`
	FleetSid       *string    `json:"fleet_sid"`
	FriendlyName   *string    `json:"friendly_name"`
	Sid            *string    `json:"sid"`
	SyncServiceSid *string    `json:"sync_service_sid"`
	URL            *string    `json:"url"`
}
