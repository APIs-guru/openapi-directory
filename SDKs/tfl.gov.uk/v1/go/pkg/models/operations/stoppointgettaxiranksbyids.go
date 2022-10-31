package operations

import (
"openapi/pkg/models/shared")

type StopPointGetTaxiRanksByIdsPathParams struct {
    StopPointID string `pathParam:"style=simple,explode=false,name=stopPointId"`
    
}

type StopPointGetTaxiRanksByIdsRequest struct {
    PathParams StopPointGetTaxiRanksByIdsPathParams 
    
}

type StopPointGetTaxiRanksByIdsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    TflAPIPresentationEntitiesPlaces []shared.TflAPIPresentationEntitiesPlace 
    
}

