package operations

import (
"openapi/pkg/models/shared")

type EditVodPathParams struct {
    OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
    
}

type EditVodRequestBodyPreorder struct {
    Active *bool `json:"active,omitempty"`
    PublishTime *string `json:"publish_time,omitempty"`
    
}

type EditVodRequestBodyPublish struct {
    Active *bool `json:"active,omitempty"`
    
}

type EditVodRequestBody struct {
    Link *string `json:"link,omitempty"`
    Preorder *EditVodRequestBodyPreorder `json:"preorder,omitempty"`
    Publish *EditVodRequestBodyPublish `json:"publish,omitempty"`
    PublishWhenReady *bool `json:"publish_when_ready,omitempty"`
    
}

type EditVodSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type EditVodRequest struct {
    PathParams EditVodPathParams 
    Request *EditVodRequestBody `request:"mediaType=application/vnd.vimeo.ondemand.page+json"`
    Security EditVodSecurity 
    
}

type EditVodResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    OnDemandPage *shared.OnDemandPage 
    
}

