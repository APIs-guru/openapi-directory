package operations

import (
"openapi/pkg/models/shared")

type CampaignsUpdatePathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    CampaignID string `pathParam:"style=simple,explode=false,name=campaignId"`
    
}

type CampaignsUpdateSecurity struct {
    SakariAuth shared.SchemeSakariAuth `security:"scheme,type=oauth2"`
    
}

type CampaignsUpdateRequest struct {
    PathParams CampaignsUpdatePathParams 
    Security CampaignsUpdateSecurity 
    
}

type CampaignsUpdateResponse struct {
    CampaignResponse *shared.CampaignResponse 
    ContentType string 
    StatusCode int64 
    
}

