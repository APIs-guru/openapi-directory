package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteInstallationSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type DeleteInstallationRequest struct {
	Security DeleteInstallationSecurity
}

type DeleteInstallation200ApplicationJSONUsageCharge struct {
	APIToken  *string `json:"api_token"`
	ClosingOn *int64  `json:"closing_on"`
}

type DeleteInstallation200ApplicationJSON struct {
	AccountID                    *string                                          `json:"account_id"`
	ApplicationChargeSourceID    *string                                          `json:"application_charge_source_id"`
	RecurringApplicationChargeID *string                                          `json:"recurring_application_charge_id"`
	UninstalledAt                *int64                                           `json:"uninstalled_at"`
	UsageCharge                  *DeleteInstallation200ApplicationJSONUsageCharge `json:"usage_charge"`
}

type DeleteInstallationResponse struct {
	ContentType                                string
	StatusCode                                 int64
	DeleteInstallation200ApplicationJSONObject *DeleteInstallation200ApplicationJSON
}
