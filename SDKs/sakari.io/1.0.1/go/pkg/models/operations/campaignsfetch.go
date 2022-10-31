package operations

import (
"openapi/pkg/models/shared")

type CampaignsFetchPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    CampaignID string `pathParam:"style=simple,explode=false,name=campaignId"`
    
}

type CampaignsFetchSecurity struct {
    SakariAuth shared.SchemeSakariAuth `security:"scheme,type=oauth2"`
    
}

type CampaignsFetchRequest struct {
    PathParams CampaignsFetchPathParams 
    Security CampaignsFetchSecurity 
    
}

type CampaignsFetchResponse struct {
    CampaignResponse *shared.CampaignResponse 
    ContentType string 
    StatusCode int64 
    
}

