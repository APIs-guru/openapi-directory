package operations

import (
"openapi/pkg/models/shared")

type PostV4PayeesPayeeIDRemoteIDUpdatePathParams struct {
    PayeeID string `pathParam:"style=simple,explode=false,name=payeeId"`
    
}

type PostV4PayeesPayeeIDRemoteIDUpdateRequest struct {
    PathParams PostV4PayeesPayeeIDRemoteIDUpdatePathParams 
    Request shared.UpdateRemoteIDRequest2 `request:"mediaType=application/json"`
    
}

type PostV4PayeesPayeeIDRemoteIDUpdateResponse struct {
    ContentType string 
    StatusCode int64 
    InlineResponse400 *interface{} 
    InlineResponse401 *interface{} 
    InlineResponse403 *interface{} 
    InlineResponse404 *interface{} 
    InlineResponse409 *interface{} 
    
}

