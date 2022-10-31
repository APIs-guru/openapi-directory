package operations

import (
"openapi/pkg/models/shared")

type GetAPIMembersHistoryQueryParams struct {
    Ids []int32 `queryParam:"style=form,explode=true,name=ids"`
    
}

type GetAPIMembersHistoryRequest struct {
    QueryParams GetAPIMembersHistoryQueryParams 
    
}

type GetAPIMembersHistoryResponse struct {
    Body []byte 
    ContentType string 
    MemberHistoryItems []shared.MemberHistoryItem 
    StatusCode int64 
    
}

