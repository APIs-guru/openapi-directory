package operations

import (
"openapi/pkg/models/shared")

type GetAlertsResponse struct {
    Alerts []shared.Alert 
    ContentType string 
    StatusCode int64 
    
}

