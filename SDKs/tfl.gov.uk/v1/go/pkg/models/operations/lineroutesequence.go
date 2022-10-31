package operations

import (
"openapi/pkg/models/shared")


type LineRouteSequenceDirectionEnum string

const (
    LineRouteSequenceDirectionEnumInbound LineRouteSequenceDirectionEnum = "inbound"
LineRouteSequenceDirectionEnumOutbound LineRouteSequenceDirectionEnum = "outbound"
LineRouteSequenceDirectionEnumAll LineRouteSequenceDirectionEnum = "all"
)


type LineRouteSequencePathParams struct {
    Direction LineRouteSequenceDirectionEnum `pathParam:"style=simple,explode=false,name=direction"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}


type LineRouteSequenceServiceTypesEnum string

const (
    LineRouteSequenceServiceTypesEnumRegular LineRouteSequenceServiceTypesEnum = "Regular"
LineRouteSequenceServiceTypesEnumNight LineRouteSequenceServiceTypesEnum = "Night"
)


type LineRouteSequenceQueryParams struct {
    ExcludeCrowding *bool `queryParam:"style=form,explode=true,name=excludeCrowding"`
    ServiceTypes []LineRouteSequenceServiceTypesEnum `queryParam:"style=form,explode=true,name=serviceTypes"`
    
}

type LineRouteSequenceRequest struct {
    PathParams LineRouteSequencePathParams 
    QueryParams LineRouteSequenceQueryParams 
    
}

type LineRouteSequenceResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    TflAPIPresentationEntitiesRouteSequence *shared.TflAPIPresentationEntitiesRouteSequence 
    
}

