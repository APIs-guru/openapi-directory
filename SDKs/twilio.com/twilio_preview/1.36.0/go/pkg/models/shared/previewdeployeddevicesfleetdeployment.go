package shared

import (
"time")

type PreviewDeployedDevicesFleetDeployment struct {
    AccountSid *string `json:"account_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    FleetSid *string `json:"fleet_sid,omitempty"`
    FriendlyName *string `json:"friendly_name,omitempty"`
    Sid *string `json:"sid,omitempty"`
    SyncServiceSid *string `json:"sync_service_sid,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

