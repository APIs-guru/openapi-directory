package shared

import (
	"time"
)

type PreviewDeployedDevicesFleetDevice struct {
	AccountSid        *string    `json:"account_sid"`
	DateAuthenticated *time.Time `json:"date_authenticated"`
	DateCreated       *time.Time `json:"date_created"`
	DateUpdated       *time.Time `json:"date_updated"`
	DeploymentSid     *string    `json:"deployment_sid"`
	Enabled           *bool      `json:"enabled"`
	FleetSid          *string    `json:"fleet_sid"`
	FriendlyName      *string    `json:"friendly_name"`
	Identity          *string    `json:"identity"`
	Sid               *string    `json:"sid"`
	UniqueName        *string    `json:"unique_name"`
	URL               *string    `json:"url"`
}
