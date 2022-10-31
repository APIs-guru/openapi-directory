package operations

import (
"openapi/pkg/models/shared")


type ExportPackagesSortEnum string

const (
    ExportPackagesSortEnumID ExportPackagesSortEnum = "id"
ExportPackagesSortEnumName ExportPackagesSortEnum = "name"
ExportPackagesSortEnumSystemsInstalled ExportPackagesSortEnum = "systems_installed"
ExportPackagesSortEnumSystemsUpdatable ExportPackagesSortEnum = "systems_updatable"
)


type ExportPackagesQueryParams struct {
    FilterName *string `queryParam:"style=form,explode=true,name=filter[name]"`
    FilterSummary *string `queryParam:"style=form,explode=true,name=filter[summary]"`
    FilterSystemsInstalled *string `queryParam:"style=form,explode=true,name=filter[systems_installed]"`
    FilterSystemsUpdatable *string `queryParam:"style=form,explode=true,name=filter[systems_updatable]"`
    Search *string `queryParam:"style=form,explode=true,name=search"`
    Sort *ExportPackagesSortEnum `queryParam:"style=form,explode=true,name=sort"`
    
}

type ExportPackagesSecurity struct {
    RhIdentity shared.SchemeRhIdentity `security:"scheme,type=apiKey,subtype=header"`
    
}

type ExportPackagesRequest struct {
    QueryParams ExportPackagesQueryParams 
    Security ExportPackagesSecurity 
    
}

type ExportPackagesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    ControllersPackageItems []shared.ControllersPackageItem 
    
}

