package operations

import (
"openapi/pkg/models/shared")

type PostCalendarsRequest struct {
    Request shared.Calendar `request:"mediaType=application/json"`
    
}

type PostCalendarsResponse struct {
    Calendar *shared.Calendar 
    ContentType string 
    StatusCode int64 
    
}

