package operations

import (
"openapi/pkg/models/shared")

type RetrieveInventoryCountPathParams struct {
    CatalogObjectID string `pathParam:"style=simple,explode=false,name=catalog_object_id"`
    
}

type RetrieveInventoryCountQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    LocationIds *string `queryParam:"style=form,explode=true,name=location_ids"`
    
}

type RetrieveInventoryCountSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type RetrieveInventoryCountRequest struct {
    PathParams RetrieveInventoryCountPathParams 
    QueryParams RetrieveInventoryCountQueryParams 
    Security RetrieveInventoryCountSecurity 
    
}

type RetrieveInventoryCountResponse struct {
    ContentType string 
    RetrieveInventoryCountResponse *shared.RetrieveInventoryCountResponse 
    StatusCode int64 
    
}

