package operations

import (
"openapi/pkg/models/shared")

type CampaignsCreatePathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    
}

type CampaignsCreateSecurity struct {
    SakariAuth shared.SchemeSakariAuth `security:"scheme,type=oauth2"`
    
}

type CampaignsCreateRequest struct {
    PathParams CampaignsCreatePathParams 
    Request *shared.CampaignRequest `request:"mediaType=application/json"`
    Security CampaignsCreateSecurity 
    
}

type CampaignsCreateResponse struct {
    CampaignResponse *shared.CampaignResponse 
    ContentType string 
    StatusCode int64 
    
}

