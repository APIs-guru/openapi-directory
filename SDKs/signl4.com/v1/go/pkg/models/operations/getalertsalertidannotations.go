package operations

import (
"openapi/pkg/models/shared")

type GetAlertsAlertIDAnnotationsPathParams struct {
    AlertID string `pathParam:"style=simple,explode=false,name=alertId"`
    
}

type GetAlertsAlertIDAnnotationsRequest struct {
    PathParams GetAlertsAlertIDAnnotationsPathParams 
    
}

type GetAlertsAlertIDAnnotationsResponse struct {
    AlertAnnotationInfos []shared.AlertAnnotationInfo 
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    StatusCode int64 
    
}

