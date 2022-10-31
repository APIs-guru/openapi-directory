package operations

import (
"openapi/pkg/models/shared")

type PostCompanyTimeOffsRequest struct {
    Request shared.CreateTimeOffPeriodRequest `request:"mediaType=application/json"`
    
}

type PostCompanyTimeOffs201ApplicationJSON struct {
    Data *shared.CreateTimeOffPeriodResponse `json:"data,omitempty"`
    
}

type PostCompanyTimeOffsResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    PostCompanyTimeOffs201ApplicationJSONObject *PostCompanyTimeOffs201ApplicationJSON 
    StatusCode int64 
    
}

