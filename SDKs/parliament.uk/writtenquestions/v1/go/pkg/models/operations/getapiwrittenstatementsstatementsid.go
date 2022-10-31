package operations

import (
"openapi/pkg/models/shared")

type GetAPIWrittenstatementsStatementsIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetAPIWrittenstatementsStatementsIDQueryParams struct {
    ExpandMember *bool `queryParam:"style=form,explode=true,name=expandMember"`
    
}

type GetAPIWrittenstatementsStatementsIDRequest struct {
    PathParams GetAPIWrittenstatementsStatementsIDPathParams 
    QueryParams GetAPIWrittenstatementsStatementsIDQueryParams 
    
}

type GetAPIWrittenstatementsStatementsIDResponse struct {
    Body []byte 
    ContentType string 
    ProblemDetails map[string]map[string]interface{} 
    StatementsViewModelSearchResult *shared.StatementsViewModelSearchResult 
    StatusCode int64 
    
}

