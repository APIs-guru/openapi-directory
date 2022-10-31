package operations

import (
"openapi/pkg/models/shared")

type AccumulateLoyaltyPointsPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=account_id"`
    
}

type AccumulateLoyaltyPointsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type AccumulateLoyaltyPointsRequest struct {
    PathParams AccumulateLoyaltyPointsPathParams 
    Request shared.AccumulateLoyaltyPointsRequest `request:"mediaType=application/json"`
    Security AccumulateLoyaltyPointsSecurity 
    
}

type AccumulateLoyaltyPointsResponse struct {
    AccumulateLoyaltyPointsResponse *shared.AccumulateLoyaltyPointsResponse 
    ContentType string 
    StatusCode int64 
    
}

