package operations

import (
"openapi/pkg/models/shared")

type PostAlertsAlertIDUndoAcknowledgePathParams struct {
    AlertID string `pathParam:"style=simple,explode=false,name=alertId"`
    
}

type PostAlertsAlertIDUndoAcknowledgeRequests struct {
    ChangeAlertStatusInfo *shared.ChangeAlertStatusInfo `request:"mediaType=application/*+json"`
    ChangeAlertStatusInfo1 *shared.ChangeAlertStatusInfo `request:"mediaType=application/json"`
    ChangeAlertStatusInfo2 *shared.ChangeAlertStatusInfo `request:"mediaType=application/json-patch+json"`
    ChangeAlertStatusInfo3 *shared.ChangeAlertStatusInfo `request:"mediaType=text/json"`
    
}

type PostAlertsAlertIDUndoAcknowledgeRequest struct {
    PathParams PostAlertsAlertIDUndoAcknowledgePathParams 
    Request *PostAlertsAlertIDUndoAcknowledgeRequests 
    
}

type PostAlertsAlertIDUndoAcknowledgeResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    OverviewAlert *shared.OverviewAlert 
    StatusCode int64 
    
}

