package operations

import (
"openapi/pkg/models/shared")

type PackageUpdateStatusQueryParams struct {
    PackageID *int32 `queryParam:"style=form,explode=true,name=packageId"`
    Status *int32 `queryParam:"style=form,explode=true,name=status"`
    UserName *string `queryParam:"style=form,explode=true,name=userName"`
    
}

type PackageUpdateStatusRequest struct {
    QueryParams PackageUpdateStatusQueryParams 
    
}

type PackageUpdateStatusResponse struct {
    APIException *shared.APIException 
    ContentType string 
    DefaultResponseDtoOfBoolean *shared.DefaultResponseDtoOfBoolean 
    DefaultResponseDtoOfString *shared.DefaultResponseDtoOfString 
    StatusCode int64 
    
}

