package operations

import (
"time"
"openapi/pkg/models/shared")

type RunsForRunPathParams struct {
    RunRef string `pathParam:"style=simple,explode=false,name=run_ref"`
    
}


type RunsForRunExpandEnum string

const (
    RunsForRunExpandEnumAll RunsForRunExpandEnum = "All"
RunsForRunExpandEnumVehicleDescriptor RunsForRunExpandEnum = "VehicleDescriptor"
RunsForRunExpandEnumVehiclePosition RunsForRunExpandEnum = "VehiclePosition"
RunsForRunExpandEnumNone RunsForRunExpandEnum = "None"
)


type RunsForRunQueryParams struct {
    DateUtc *time.Time `queryParam:"style=form,explode=true,name=date_utc"`
    Devid *string `queryParam:"style=form,explode=true,name=devid"`
    Expand []RunsForRunExpandEnum `queryParam:"style=form,explode=true,name=expand"`
    IncludeGeopath *bool `queryParam:"style=form,explode=true,name=include_geopath"`
    Signature *string `queryParam:"style=form,explode=true,name=signature"`
    Token *string `queryParam:"style=form,explode=true,name=token"`
    
}

type RunsForRunRequest struct {
    PathParams RunsForRunPathParams 
    QueryParams RunsForRunQueryParams 
    
}

type RunsForRunResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    V3ErrorResponse *shared.V3ErrorResponse 
    V3RunsResponse *shared.V3RunsResponse 
    
}

