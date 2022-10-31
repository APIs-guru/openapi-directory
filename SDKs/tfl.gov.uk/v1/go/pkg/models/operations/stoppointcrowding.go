package operations

import (
"openapi/pkg/models/shared")

type StopPointCrowdingPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Line string `pathParam:"style=simple,explode=false,name=line"`
    
}


type StopPointCrowdingDirectionEnum string

const (
    StopPointCrowdingDirectionEnumInbound StopPointCrowdingDirectionEnum = "inbound"
StopPointCrowdingDirectionEnumOutbound StopPointCrowdingDirectionEnum = "outbound"
StopPointCrowdingDirectionEnumAll StopPointCrowdingDirectionEnum = "all"
)


type StopPointCrowdingQueryParams struct {
    Direction StopPointCrowdingDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    
}

type StopPointCrowdingRequest struct {
    PathParams StopPointCrowdingPathParams 
    QueryParams StopPointCrowdingQueryParams 
    
}

type StopPointCrowdingResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    TflAPIPresentationEntitiesStopPoints []shared.TflAPIPresentationEntitiesStopPoint 
    
}

