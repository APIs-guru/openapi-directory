package operations

import (
"openapi/pkg/models/shared")

type GetFacilityByIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetFacilityByIDSecurity struct {
    Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetFacilityByIDRequest struct {
    PathParams GetFacilityByIDPathParams 
    Security GetFacilityByIDSecurity 
    
}

type GetFacilityByIDResponse struct {
    APIError *shared.APIError 
    ContentType string 
    FacilityReadResponse *shared.FacilityReadResponse 
    GenericError *shared.GenericError 
    GeoFacilityReadResponse *shared.GeoFacilityReadResponse 
    StatusCode int64 
    
}

