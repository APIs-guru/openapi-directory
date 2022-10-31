package operations

import (
"openapi/pkg/models/shared")

type ListCatalogQueryParams struct {
    CatalogVersion *int64 `queryParam:"style=form,explode=true,name=catalog_version"`
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    Types *string `queryParam:"style=form,explode=true,name=types"`
    
}

type ListCatalogSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type ListCatalogRequest struct {
    QueryParams ListCatalogQueryParams 
    Security ListCatalogSecurity 
    
}

type ListCatalogResponse struct {
    ContentType string 
    ListCatalogResponse *shared.ListCatalogResponse 
    StatusCode int64 
    
}

