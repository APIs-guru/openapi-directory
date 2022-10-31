package operations

import (
"openapi/pkg/models/shared")


type LineRouteServiceTypesEnum string

const (
    LineRouteServiceTypesEnumRegular LineRouteServiceTypesEnum = "Regular"
LineRouteServiceTypesEnumNight LineRouteServiceTypesEnum = "Night"
)


type LineRouteQueryParams struct {
    ServiceTypes []LineRouteServiceTypesEnum `queryParam:"style=form,explode=true,name=serviceTypes"`
    
}

type LineRouteRequest struct {
    QueryParams LineRouteQueryParams 
    
}

type LineRouteResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    TflAPIPresentationEntitiesLines []shared.TflAPIPresentationEntitiesLine 
    
}

