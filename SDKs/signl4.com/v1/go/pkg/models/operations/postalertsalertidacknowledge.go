package operations

import (
"openapi/pkg/models/shared")

type PostAlertsAlertIDAcknowledgePathParams struct {
    AlertID string `pathParam:"style=simple,explode=false,name=alertId"`
    
}

type PostAlertsAlertIDAcknowledgeRequests struct {
    ChangeAlertStatusInfo *shared.ChangeAlertStatusInfo `request:"mediaType=application/*+json"`
    ChangeAlertStatusInfo1 *shared.ChangeAlertStatusInfo `request:"mediaType=application/json"`
    ChangeAlertStatusInfo2 *shared.ChangeAlertStatusInfo `request:"mediaType=application/json-patch+json"`
    ChangeAlertStatusInfo3 *shared.ChangeAlertStatusInfo `request:"mediaType=text/json"`
    
}

type PostAlertsAlertIDAcknowledgeRequest struct {
    PathParams PostAlertsAlertIDAcknowledgePathParams 
    Request *PostAlertsAlertIDAcknowledgeRequests 
    
}

type PostAlertsAlertIDAcknowledgeResponse struct {
    AlertInfo *shared.AlertInfo 
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    StatusCode int64 
    
}

