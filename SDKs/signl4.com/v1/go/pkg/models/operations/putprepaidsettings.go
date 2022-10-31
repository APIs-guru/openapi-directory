package operations

import (
"openapi/pkg/models/shared")

type PutPrepaidSettingsRequests struct {
    PrepaidSettingsInfo *shared.PrepaidSettingsInfo `request:"mediaType=application/*+json"`
    PrepaidSettingsInfo1 *shared.PrepaidSettingsInfo `request:"mediaType=application/json"`
    PrepaidSettingsInfo2 *shared.PrepaidSettingsInfo `request:"mediaType=application/json-patch+json"`
    PrepaidSettingsInfo3 *shared.PrepaidSettingsInfo `request:"mediaType=text/json"`
    
}

type PutPrepaidSettingsRequest struct {
    Request *PutPrepaidSettingsRequests 
    
}

type PutPrepaidSettingsResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    PrepaidSettingsInfo *shared.PrepaidSettingsInfo 
    StatusCode int64 
    
}

