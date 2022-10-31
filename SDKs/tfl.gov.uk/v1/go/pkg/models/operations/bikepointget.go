package operations

import (
"openapi/pkg/models/shared")

type BikePointGetPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type BikePointGetRequest struct {
    PathParams BikePointGetPathParams 
    
}

type BikePointGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    TflAPIPresentationEntitiesPlace *shared.TflAPIPresentationEntitiesPlace 
    
}

