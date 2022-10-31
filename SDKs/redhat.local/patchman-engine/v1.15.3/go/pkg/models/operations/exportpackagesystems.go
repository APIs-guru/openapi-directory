package operations

import (
"openapi/pkg/models/shared")

type ExportPackageSystemsPathParams struct {
    PackageName string `pathParam:"style=simple,explode=false,name=package_name"`
    
}

type ExportPackageSystemsQueryParams struct {
    FilterSystemProfileSapSidsIn []string `queryParam:"style=form,explode=true,name=filter[system_profile][sap_sids][in]"`
    FilterSystemProfileSapSystem *string `queryParam:"style=form,explode=true,name=filter[system_profile][sap_system]"`
    Tags []string `queryParam:"style=form,explode=true,name=tags"`
    
}

type ExportPackageSystemsSecurity struct {
    RhIdentity shared.SchemeRhIdentity `security:"scheme,type=apiKey,subtype=header"`
    
}

type ExportPackageSystemsRequest struct {
    PathParams ExportPackageSystemsPathParams 
    QueryParams ExportPackageSystemsQueryParams 
    Security ExportPackageSystemsSecurity 
    
}

type ExportPackageSystemsResponse struct {
    ContentType string 
    StatusCode int64 
    ControllersPackageSystemItems []shared.ControllersPackageSystemItem 
    
}

