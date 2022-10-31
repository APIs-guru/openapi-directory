package operations

import (
"openapi/pkg/models/shared")

type ListLoyaltyProgramsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type ListLoyaltyProgramsRequest struct {
    Security ListLoyaltyProgramsSecurity 
    
}

type ListLoyaltyProgramsResponse struct {
    ContentType string 
    ListLoyaltyProgramsResponse *shared.ListLoyaltyProgramsResponse 
    StatusCode int64 
    
}

