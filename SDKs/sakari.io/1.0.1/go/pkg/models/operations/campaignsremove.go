package operations

import (
	"openapi/pkg/models/shared"
)

type CampaignsRemovePathParams struct {
	AccountID  string `pathParam:"style=simple,explode=false,name=accountId"`
	CampaignID string `pathParam:"style=simple,explode=false,name=campaignId"`
}

type CampaignsRemoveSecurity struct {
	SakariAuth shared.SchemeSakariAuth `security:"scheme,type=oauth2"`
}

type CampaignsRemoveRequest struct {
	PathParams CampaignsRemovePathParams
	Security   CampaignsRemoveSecurity
}

type CampaignsRemove200ApplicationJSON struct {
	Success *bool `json:"success"`
}

type CampaignsRemoveResponse struct {
	ContentType                             string
	StatusCode                              int64
	CampaignsRemove200ApplicationJSONObject *CampaignsRemove200ApplicationJSON
}
