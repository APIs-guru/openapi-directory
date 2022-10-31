package operations

import (
"openapi/pkg/models/shared")

type AccidentStatsGetPathParams struct {
    Year int32 `pathParam:"style=simple,explode=false,name=year"`
    
}

type AccidentStatsGetRequest struct {
    PathParams AccidentStatsGetPathParams 
    
}

type AccidentStatsGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    TflAPIPresentationEntitiesAccidentStatsAccidentDetails []shared.TflAPIPresentationEntitiesAccidentStatsAccidentDetail 
    
}

