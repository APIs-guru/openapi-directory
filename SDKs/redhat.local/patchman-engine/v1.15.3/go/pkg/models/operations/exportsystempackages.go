package operations

import (
"openapi/pkg/models/shared")

type ExportSystemPackagesPathParams struct {
    InventoryID string `pathParam:"style=simple,explode=false,name=inventory_id"`
    
}

type ExportSystemPackagesQueryParams struct {
    FilterDescription *string `queryParam:"style=form,explode=true,name=filter[description]"`
    FilterEvra *string `queryParam:"style=form,explode=true,name=filter[evra]"`
    FilterName *string `queryParam:"style=form,explode=true,name=filter[name]"`
    FilterSummary *string `queryParam:"style=form,explode=true,name=filter[summary]"`
    FilterUpdatable *bool `queryParam:"style=form,explode=true,name=filter[updatable]"`
    Search *string `queryParam:"style=form,explode=true,name=search"`
    
}

type ExportSystemPackagesSecurity struct {
    RhIdentity shared.SchemeRhIdentity `security:"scheme,type=apiKey,subtype=header"`
    
}

type ExportSystemPackagesRequest struct {
    PathParams ExportSystemPackagesPathParams 
    QueryParams ExportSystemPackagesQueryParams 
    Security ExportSystemPackagesSecurity 
    
}

type ExportSystemPackagesResponse struct {
    ContentType string 
    StatusCode int64 
    ControllersSystemPackageInlines []shared.ControllersSystemPackageInline 
    
}

