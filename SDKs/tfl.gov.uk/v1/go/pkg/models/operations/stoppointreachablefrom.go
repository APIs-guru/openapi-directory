package operations

import (
"openapi/pkg/models/shared")

type StopPointReachableFromPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    LineID string `pathParam:"style=simple,explode=false,name=lineId"`
    
}


type StopPointReachableFromServiceTypesEnum string

const (
    StopPointReachableFromServiceTypesEnumRegular StopPointReachableFromServiceTypesEnum = "Regular"
StopPointReachableFromServiceTypesEnumNight StopPointReachableFromServiceTypesEnum = "Night"
)


type StopPointReachableFromQueryParams struct {
    ServiceTypes []StopPointReachableFromServiceTypesEnum `queryParam:"style=form,explode=true,name=serviceTypes"`
    
}

type StopPointReachableFromRequest struct {
    PathParams StopPointReachableFromPathParams 
    QueryParams StopPointReachableFromQueryParams 
    
}

type StopPointReachableFromResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    TflAPIPresentationEntitiesStopPoints []shared.TflAPIPresentationEntitiesStopPoint 
    
}

