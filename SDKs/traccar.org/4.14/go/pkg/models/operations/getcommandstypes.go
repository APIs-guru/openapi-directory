package operations

import (
"openapi/pkg/models/shared")

type GetCommandsTypesQueryParams struct {
    DeviceID *int64 `queryParam:"style=form,explode=true,name=deviceId"`
    Protocol *string `queryParam:"style=form,explode=true,name=protocol"`
    TextChannel *bool `queryParam:"style=form,explode=true,name=textChannel"`
    
}

type GetCommandsTypesRequest struct {
    QueryParams GetCommandsTypesQueryParams 
    
}

type GetCommandsTypesResponse struct {
    CommandTypes []shared.CommandType 
    ContentType string 
    StatusCode int64 
    
}

