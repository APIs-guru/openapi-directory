package operations

import (
"openapi/pkg/models/shared")

type DeleteInstallationSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type DeleteInstallationRequest struct {
    Security DeleteInstallationSecurity 
    
}

type DeleteInstallation200ApplicationJSONUsageCharge struct {
    APIToken *string `json:"api_token,omitempty"`
    ClosingOn *int64 `json:"closing_on,omitempty"`
    
}

type DeleteInstallation200ApplicationJSON struct {
    AccountID *string `json:"account_id,omitempty"`
    ApplicationChargeSourceID *string `json:"application_charge_source_id,omitempty"`
    RecurringApplicationChargeID *string `json:"recurring_application_charge_id,omitempty"`
    UninstalledAt *int64 `json:"uninstalled_at,omitempty"`
    UsageCharge *DeleteInstallation200ApplicationJSONUsageCharge `json:"usage_charge,omitempty"`
    
}

type DeleteInstallationResponse struct {
    ContentType string 
    StatusCode int64 
    DeleteInstallation200ApplicationJSONObject *DeleteInstallation200ApplicationJSON 
    
}

