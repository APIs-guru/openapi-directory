package operations

import (
"openapi/pkg/models/shared")

type PostAlertsAlertIDUndoClosePathParams struct {
    AlertID string `pathParam:"style=simple,explode=false,name=alertId"`
    
}

type PostAlertsAlertIDUndoCloseRequests struct {
    ChangeAlertStatusInfo *shared.ChangeAlertStatusInfo `request:"mediaType=application/*+json"`
    ChangeAlertStatusInfo1 *shared.ChangeAlertStatusInfo `request:"mediaType=application/json"`
    ChangeAlertStatusInfo2 *shared.ChangeAlertStatusInfo `request:"mediaType=application/json-patch+json"`
    ChangeAlertStatusInfo3 *shared.ChangeAlertStatusInfo `request:"mediaType=text/json"`
    
}

type PostAlertsAlertIDUndoCloseRequest struct {
    PathParams PostAlertsAlertIDUndoClosePathParams 
    Request *PostAlertsAlertIDUndoCloseRequests 
    
}

type PostAlertsAlertIDUndoCloseResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    OverviewAlert *shared.OverviewAlert 
    StatusCode int64 
    
}

