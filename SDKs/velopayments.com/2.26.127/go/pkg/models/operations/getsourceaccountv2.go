package operations

import (
"openapi/pkg/models/shared")

type GetSourceAccountV2PathParams struct {
    SourceAccountID string `pathParam:"style=simple,explode=false,name=sourceAccountId"`
    
}

type GetSourceAccountV2Request struct {
    PathParams GetSourceAccountV2PathParams 
    
}

type GetSourceAccountV2Response struct {
    ContentType string 
    SourceAccountResponseV2 *shared.SourceAccountResponseV2 
    StatusCode int64 
    InlineResponse400 *interface{} 
    InlineResponse401 *interface{} 
    InlineResponse403 *interface{} 
    InlineResponse404 *interface{} 
    
}

