package operations

import (
"openapi/pkg/models/shared")

type SearchCatalogObjectsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type SearchCatalogObjectsRequest struct {
    Request shared.SearchCatalogObjectsRequest `request:"mediaType=application/json"`
    Security SearchCatalogObjectsSecurity 
    
}

type SearchCatalogObjectsResponse struct {
    ContentType string 
    SearchCatalogObjectsResponse *shared.SearchCatalogObjectsResponse 
    StatusCode int64 
    
}

