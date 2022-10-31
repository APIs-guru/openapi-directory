package operations

import (
"openapi/pkg/models/shared")

type PackageSearchQueryParams struct {
    ActiveStatus *int32 `queryParam:"style=form,explode=true,name=activeStatus"`
    CategoryID *int32 `queryParam:"style=form,explode=true,name=categoryId"`
    EndPrice *float64 `queryParam:"style=form,explode=true,name=endPrice"`
    GymID *int32 `queryParam:"style=form,explode=true,name=gymId"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    OrderBy *string `queryParam:"style=form,explode=true,name=orderBy"`
    RequestSource *int32 `queryParam:"style=form,explode=true,name=requestSource"`
    SearchText *string `queryParam:"style=form,explode=true,name=searchText"`
    StartpPrice *float64 `queryParam:"style=form,explode=true,name=startpPrice"`
    Type *string `queryParam:"style=form,explode=true,name=type"`
    
}

type PackageSearchRequest struct {
    QueryParams PackageSearchQueryParams 
    
}

type PackageSearchResponse struct {
    APIException *shared.APIException 
    ContentType string 
    DefaultResponseDtoOfListOfPackageSearchDto *shared.DefaultResponseDtoOfListOfPackageSearchDto 
    DefaultResponseDtoOfPackageSearchDtos []shared.DefaultResponseDtoOfPackageSearchDto 
    StatusCode int64 
    
}

