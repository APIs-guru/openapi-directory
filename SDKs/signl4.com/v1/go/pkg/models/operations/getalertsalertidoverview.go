package operations

import (
"openapi/pkg/models/shared")

type GetAlertsAlertIDOverviewPathParams struct {
    AlertID string `pathParam:"style=simple,explode=false,name=alertId"`
    
}

type GetAlertsAlertIDOverviewRequest struct {
    PathParams GetAlertsAlertIDOverviewPathParams 
    
}

type GetAlertsAlertIDOverviewResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    OverviewAlert *shared.OverviewAlert 
    StatusCode int64 
    
}

