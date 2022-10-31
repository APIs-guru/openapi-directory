package operations

import (
"openapi/pkg/models/shared")

type SystemPackagesPathParams struct {
    InventoryID string `pathParam:"style=simple,explode=false,name=inventory_id"`
    
}

type SystemPackagesQueryParams struct {
    FilterDescription *string `queryParam:"style=form,explode=true,name=filter[description]"`
    FilterEvra *string `queryParam:"style=form,explode=true,name=filter[evra]"`
    FilterName *string `queryParam:"style=form,explode=true,name=filter[name]"`
    FilterSummary *string `queryParam:"style=form,explode=true,name=filter[summary]"`
    FilterUpdatable *bool `queryParam:"style=form,explode=true,name=filter[updatable]"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    Search *string `queryParam:"style=form,explode=true,name=search"`
    
}

type SystemPackagesSecurity struct {
    RhIdentity shared.SchemeRhIdentity `security:"scheme,type=apiKey,subtype=header"`
    
}

type SystemPackagesRequest struct {
    PathParams SystemPackagesPathParams 
    QueryParams SystemPackagesQueryParams 
    Security SystemPackagesSecurity 
    
}

type SystemPackagesResponse struct {
    ContentType string 
    StatusCode int64 
    ControllersSystemPackageResponse *shared.ControllersSystemPackageResponse 
    
}

