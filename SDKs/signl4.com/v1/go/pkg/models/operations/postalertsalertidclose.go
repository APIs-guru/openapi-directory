package operations

import (
"openapi/pkg/models/shared")

type PostAlertsAlertIDClosePathParams struct {
    AlertID string `pathParam:"style=simple,explode=false,name=alertId"`
    
}

type PostAlertsAlertIDCloseRequests struct {
    ChangeAlertStatusInfo *shared.ChangeAlertStatusInfo `request:"mediaType=application/*+json"`
    ChangeAlertStatusInfo1 *shared.ChangeAlertStatusInfo `request:"mediaType=application/json"`
    ChangeAlertStatusInfo2 *shared.ChangeAlertStatusInfo `request:"mediaType=application/json-patch+json"`
    ChangeAlertStatusInfo3 *shared.ChangeAlertStatusInfo `request:"mediaType=text/json"`
    
}

type PostAlertsAlertIDCloseRequest struct {
    PathParams PostAlertsAlertIDClosePathParams 
    Request *PostAlertsAlertIDCloseRequests 
    
}

type PostAlertsAlertIDCloseResponse struct {
    AlertInfo *shared.AlertInfo 
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    StatusCode int64 
    
}

