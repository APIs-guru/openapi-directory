package operations

import (
"openapi/pkg/models/shared")

type GetGroupsByIdsQueryParams struct {
    GroupIds string `queryParam:"style=form,explode=true,name=group_ids"`
    
}

type GetGroupsByIdsSecurityOption1 struct {
    Oauth2Implicit shared.SchemeOauth2Implicit `security:"scheme,type=oauth2"`
    
}

type GetGroupsByIdsSecurityOption2 struct {
    Oauth2Code shared.SchemeOauth2Code `security:"scheme,type=oauth2"`
    
}

type GetGroupsByIdsSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
    
}

type GetGroupsByIdsSecurity struct {
    Option1 *GetGroupsByIdsSecurityOption1 `security:"option"`
    Option2 *GetGroupsByIdsSecurityOption2 `security:"option"`
    Option3 *GetGroupsByIdsSecurityOption3 `security:"option"`
    
}

type GetGroupsByIdsRequest struct {
    QueryParams GetGroupsByIdsQueryParams 
    Security GetGroupsByIdsSecurity 
    
}

type GetGroupsByIdsResponse struct {
    ContentType string 
    Groups []shared.Group 
    StatusCode int64 
    
}

