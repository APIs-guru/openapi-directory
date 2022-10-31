package operations

import (
"openapi/pkg/models/shared")

type OccupancyGetPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type OccupancyGetRequest struct {
    PathParams OccupancyGetPathParams 
    
}

type OccupancyGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    TflAPIPresentationEntitiesCarParkOccupancy *shared.TflAPIPresentationEntitiesCarParkOccupancy 
    
}

