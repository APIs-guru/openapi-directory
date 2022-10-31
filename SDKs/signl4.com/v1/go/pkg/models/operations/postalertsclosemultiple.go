package operations

import (
"openapi/pkg/models/shared")

type PostAlertsCloseMultipleRequests struct {
    ChangeAlertStatusMultipleInfo *shared.ChangeAlertStatusMultipleInfo `request:"mediaType=application/*+json"`
    ChangeAlertStatusMultipleInfo1 *shared.ChangeAlertStatusMultipleInfo `request:"mediaType=application/json"`
    ChangeAlertStatusMultipleInfo2 *shared.ChangeAlertStatusMultipleInfo `request:"mediaType=application/json-patch+json"`
    ChangeAlertStatusMultipleInfo3 *shared.ChangeAlertStatusMultipleInfo `request:"mediaType=text/json"`
    
}

type PostAlertsCloseMultipleRequest struct {
    Request *PostAlertsCloseMultipleRequests 
    
}

type PostAlertsCloseMultipleResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    StatusCode int64 
    
}

