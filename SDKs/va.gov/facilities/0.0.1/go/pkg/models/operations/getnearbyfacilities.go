package operations

import (
"openapi/pkg/models/shared")

type GetNearbyFacilitiesQueryParams struct {
    City *string `queryParam:"style=form,explode=true,name=city"`
    DriveTime *int32 `queryParam:"style=form,explode=true,name=drive_time"`
    Lat *float32 `queryParam:"style=form,explode=true,name=lat"`
    Lng *float32 `queryParam:"style=form,explode=true,name=lng"`
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    Services []string `queryParam:"style=form,explode=true,name=services[]"`
    State *string `queryParam:"style=form,explode=true,name=state"`
    StreetAddress *string `queryParam:"style=form,explode=true,name=street_address"`
    Zip *string `queryParam:"style=form,explode=true,name=zip"`
    
}

type GetNearbyFacilitiesSecurity struct {
    Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetNearbyFacilitiesRequest struct {
    QueryParams GetNearbyFacilitiesQueryParams 
    Security GetNearbyFacilitiesSecurity 
    
}

type GetNearbyFacilitiesResponse struct {
    APIError *shared.APIError 
    ContentType string 
    GenericError *shared.GenericError 
    NearbyResponse *shared.NearbyResponse 
    StatusCode int64 
    
}

