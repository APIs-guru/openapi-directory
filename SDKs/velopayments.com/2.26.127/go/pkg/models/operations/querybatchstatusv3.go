package operations

import (
"openapi/pkg/models/shared")

type QueryBatchStatusV3PathParams struct {
    BatchID string `pathParam:"style=simple,explode=false,name=batchId"`
    
}

type QueryBatchStatusV3Request struct {
    PathParams QueryBatchStatusV3PathParams 
    
}

type QueryBatchStatusV3Response struct {
    ContentType string 
    QueryBatchResponse *shared.QueryBatchResponse 
    StatusCode int64 
    InlineResponse400 *interface{} 
    InlineResponse401 *interface{} 
    InlineResponse403 *interface{} 
    InlineResponse404 *interface{} 
    
}

