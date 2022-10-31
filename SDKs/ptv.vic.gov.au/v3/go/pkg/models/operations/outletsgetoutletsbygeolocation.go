package operations

import (
"openapi/pkg/models/shared")

type OutletsGetOutletsByGeolocationPathParams struct {
    Latitude float32 `pathParam:"style=simple,explode=false,name=latitude"`
    Longitude float32 `pathParam:"style=simple,explode=false,name=longitude"`
    
}

type OutletsGetOutletsByGeolocationQueryParams struct {
    Devid *string `queryParam:"style=form,explode=true,name=devid"`
    MaxDistance *float64 `queryParam:"style=form,explode=true,name=max_distance"`
    MaxResults *int32 `queryParam:"style=form,explode=true,name=max_results"`
    Signature *string `queryParam:"style=form,explode=true,name=signature"`
    Token *string `queryParam:"style=form,explode=true,name=token"`
    
}

type OutletsGetOutletsByGeolocationRequest struct {
    PathParams OutletsGetOutletsByGeolocationPathParams 
    QueryParams OutletsGetOutletsByGeolocationQueryParams 
    
}

type OutletsGetOutletsByGeolocationResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    V3ErrorResponse *shared.V3ErrorResponse 
    V3OutletGeolocationResponse *shared.V3OutletGeolocationResponse 
    
}

