package shared

import (
"time")

type PreviewDeployedDevicesFleetDevice struct {
    AccountSid *string `json:"account_sid,omitempty"`
    DateAuthenticated *time.Time `json:"date_authenticated,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    DeploymentSid *string `json:"deployment_sid,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    FleetSid *string `json:"fleet_sid,omitempty"`
    FriendlyName *string `json:"friendly_name,omitempty"`
    Identity *string `json:"identity,omitempty"`
    Sid *string `json:"sid,omitempty"`
    UniqueName *string `json:"unique_name,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

