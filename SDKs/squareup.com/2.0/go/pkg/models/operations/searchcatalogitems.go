package operations

import (
"openapi/pkg/models/shared")

type SearchCatalogItemsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type SearchCatalogItemsRequest struct {
    Request shared.SearchCatalogItemsRequest `request:"mediaType=application/json"`
    Security SearchCatalogItemsSecurity 
    
}

type SearchCatalogItemsResponse struct {
    ContentType string 
    SearchCatalogItemsResponse *shared.SearchCatalogItemsResponse 
    StatusCode int64 
    
}

