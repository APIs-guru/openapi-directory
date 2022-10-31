package operations

import (
"openapi/pkg/models/shared")

type UpsertCatalogObjectSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type UpsertCatalogObjectRequest struct {
    Request shared.UpsertCatalogObjectRequest `request:"mediaType=application/json"`
    Security UpsertCatalogObjectSecurity 
    
}

type UpsertCatalogObjectResponse struct {
    ContentType string 
    StatusCode int64 
    UpsertCatalogObjectResponse *shared.UpsertCatalogObjectResponse 
    
}

