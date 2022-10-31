package operations

import (
"openapi/pkg/models/shared")

type ListSitesSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type ListSitesRequest struct {
    Security ListSitesSecurity 
    
}

type ListSitesResponse struct {
    ContentType string 
    ListSitesResponse *shared.ListSitesResponse 
    StatusCode int64 
    
}

