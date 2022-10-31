package operations

import (
"openapi/pkg/models/shared")

type PostAlertsCloseAllQueryParams struct {
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type PostAlertsCloseAllRequests struct {
    ChangeAlertStatusFilterInfo *shared.ChangeAlertStatusFilterInfo `request:"mediaType=application/*+json"`
    ChangeAlertStatusFilterInfo1 *shared.ChangeAlertStatusFilterInfo `request:"mediaType=application/json"`
    ChangeAlertStatusFilterInfo2 *shared.ChangeAlertStatusFilterInfo `request:"mediaType=application/json-patch+json"`
    ChangeAlertStatusFilterInfo3 *shared.ChangeAlertStatusFilterInfo `request:"mediaType=text/json"`
    
}

type PostAlertsCloseAllRequest struct {
    QueryParams PostAlertsCloseAllQueryParams 
    Request *PostAlertsCloseAllRequests 
    
}

type PostAlertsCloseAllResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    StatusCode int64 
    
}

