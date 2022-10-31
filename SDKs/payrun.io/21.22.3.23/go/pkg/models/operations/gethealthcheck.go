package operations

import (
"openapi/pkg/models/shared")

type GetHealthCheckResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    HealthCheck *shared.HealthCheck 
    StatusCode int64 
    
}

