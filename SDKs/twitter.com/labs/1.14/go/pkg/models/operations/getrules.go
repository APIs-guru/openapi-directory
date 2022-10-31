package operations

import (
"openapi/pkg/models/shared")

type GetRulesQueryParams struct {
    Ids []string `queryParam:"style=form,explode=true,name=ids"`
    
}

type GetRulesRequest struct {
    QueryParams GetRulesQueryParams 
    
}

type GetRulesResponse struct {
    ContentType string 
    Error *interface{} 
    GetRulesResponse *shared.GetRulesResponse 
    Problem *interface{} 
    StatusCode int64 
    
}

