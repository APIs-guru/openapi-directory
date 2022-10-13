package shared

import (
	"time"
)

type PreviewDeployedDevicesFleet struct {
	AccountSid           *string                `json:"account_sid"`
	DateCreated          *time.Time             `json:"date_created"`
	DateUpdated          *time.Time             `json:"date_updated"`
	DefaultDeploymentSid *string                `json:"default_deployment_sid"`
	FriendlyName         *string                `json:"friendly_name"`
	Links                map[string]interface{} `json:"links"`
	Sid                  *string                `json:"sid"`
	UniqueName           *string                `json:"unique_name"`
	URL                  *string                `json:"url"`
}
