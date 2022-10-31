package operations

import (
"openapi/pkg/models/shared")

type GetFundingsV1QueryParams struct {
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int32 `queryParam:"style=form,explode=true,name=pageSize"`
    PayorID string `queryParam:"style=form,explode=true,name=payorId"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetFundingsV1Request struct {
    QueryParams GetFundingsV1QueryParams 
    
}

type GetFundingsV1Response struct {
    ContentType string 
    GetFundingsResponse *shared.GetFundingsResponse 
    StatusCode int64 
    InlineResponse400 *interface{} 
    InlineResponse401 *interface{} 
    InlineResponse403 *interface{} 
    InlineResponse404 *interface{} 
    
}

