package operations

import (
"openapi/pkg/models/shared")

type ModeArrivalsPathParams struct {
    Mode string `pathParam:"style=simple,explode=false,name=mode"`
    
}

type ModeArrivalsQueryParams struct {
    Count *int32 `queryParam:"style=form,explode=true,name=count"`
    
}

type ModeArrivalsRequest struct {
    PathParams ModeArrivalsPathParams 
    QueryParams ModeArrivalsQueryParams 
    
}

type ModeArrivalsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    TflAPIPresentationEntitiesPredictions []shared.TflAPIPresentationEntitiesPrediction 
    
}

