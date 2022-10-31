package operations

import (
"openapi/pkg/models/shared")

type RetrieveLoyaltyRewardPathParams struct {
    RewardID string `pathParam:"style=simple,explode=false,name=reward_id"`
    
}

type RetrieveLoyaltyRewardSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type RetrieveLoyaltyRewardRequest struct {
    PathParams RetrieveLoyaltyRewardPathParams 
    Security RetrieveLoyaltyRewardSecurity 
    
}

type RetrieveLoyaltyRewardResponse struct {
    ContentType string 
    RetrieveLoyaltyRewardResponse *shared.RetrieveLoyaltyRewardResponse 
    StatusCode int64 
    
}

