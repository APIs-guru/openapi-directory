package operations

import (
"openapi/pkg/models/shared")

type PackageGetQueryParams struct {
    PackageID *int32 `queryParam:"style=form,explode=true,name=packageId"`
    
}

type PackageGetRequest struct {
    QueryParams PackageGetQueryParams 
    
}

type PackageGetResponse struct {
    APIException *shared.APIException 
    ContentType string 
    DefaultResponseDtoOfPackageDto *shared.DefaultResponseDtoOfPackageDto 
    StatusCode int64 
    
}

