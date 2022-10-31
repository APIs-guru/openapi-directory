package operations

import (
"openapi/pkg/models/shared")

type DeleteMyFollowsCategoriesIdentifierPathParams struct {
    Identifier string `pathParam:"style=simple,explode=false,name=identifier"`
    
}

type DeleteMyFollowsCategoriesIdentifierSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteMyFollowsCategoriesIdentifierRequest struct {
    PathParams DeleteMyFollowsCategoriesIdentifierPathParams 
    Security DeleteMyFollowsCategoriesIdentifierSecurity 
    
}

type DeleteMyFollowsCategoriesIdentifierResponse struct {
    ContentType string 
    StatusCode int64 
    
}

