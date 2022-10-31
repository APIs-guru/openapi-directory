package operations

import (
"openapi/pkg/models/shared")

type RetrieveLoyaltyAccountPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=account_id"`
    
}

type RetrieveLoyaltyAccountSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type RetrieveLoyaltyAccountRequest struct {
    PathParams RetrieveLoyaltyAccountPathParams 
    Security RetrieveLoyaltyAccountSecurity 
    
}

type RetrieveLoyaltyAccountResponse struct {
    ContentType string 
    RetrieveLoyaltyAccountResponse *shared.RetrieveLoyaltyAccountResponse 
    StatusCode int64 
    
}

