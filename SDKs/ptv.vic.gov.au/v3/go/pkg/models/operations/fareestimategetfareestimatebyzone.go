package operations

import (
"time"
"openapi/pkg/models/shared")

type FareEstimateGetFareEstimateByZonePathParams struct {
    MaxZone int32 `pathParam:"style=simple,explode=false,name=maxZone"`
    MinZone int32 `pathParam:"style=simple,explode=false,name=minZone"`
    
}

type FareEstimateGetFareEstimateByZoneQueryParams struct {
    Devid *string `queryParam:"style=form,explode=true,name=devid"`
    IsJourneyInFreeTramZone *bool `queryParam:"style=form,explode=true,name=is_journey_in_free_tram_zone"`
    JourneyTouchOffUtc *time.Time `queryParam:"style=form,explode=true,name=journey_touch_off_utc"`
    JourneyTouchOnUtc *time.Time `queryParam:"style=form,explode=true,name=journey_touch_on_utc"`
    Signature *string `queryParam:"style=form,explode=true,name=signature"`
    Token *string `queryParam:"style=form,explode=true,name=token"`
    TravelledRouteTypes []int32 `queryParam:"style=form,explode=true,name=travelled_route_types"`
    
}

type FareEstimateGetFareEstimateByZoneRequest struct {
    PathParams FareEstimateGetFareEstimateByZonePathParams 
    QueryParams FareEstimateGetFareEstimateByZoneQueryParams 
    
}

type FareEstimateGetFareEstimateByZoneResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    V3ErrorResponse *shared.V3ErrorResponse 
    V3FareEstimateResponse *interface{} 
    
}

