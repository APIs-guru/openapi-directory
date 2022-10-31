package operations

import (
"openapi/pkg/models/shared")

type PostV3PayeesPayeeIDRemoteIDUpdatePathParams struct {
    PayeeID string `pathParam:"style=simple,explode=false,name=payeeId"`
    
}

type PostV3PayeesPayeeIDRemoteIDUpdateRequest struct {
    PathParams PostV3PayeesPayeeIDRemoteIDUpdatePathParams 
    Request shared.UpdateRemoteIDRequest `request:"mediaType=application/json"`
    
}

type PostV3PayeesPayeeIDRemoteIDUpdateResponse struct {
    ContentType string 
    StatusCode int64 
    InlineResponse400 *interface{} 
    InlineResponse401 *interface{} 
    InlineResponse403 *interface{} 
    InlineResponse404 *interface{} 
    InlineResponse409 *interface{} 
    
}

