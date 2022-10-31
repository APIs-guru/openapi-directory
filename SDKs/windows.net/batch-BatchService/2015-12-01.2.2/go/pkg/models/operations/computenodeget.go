package operations



type ComputeNodeGetPathParams struct {
    NodeID string `pathParam:"style=simple,explode=false,name=nodeId"`
    PoolID string `pathParam:"style=simple,explode=false,name=poolId"`
    
}

type ComputeNodeGetQueryParams struct {
    DollarSelect *string `queryParam:"style=form,explode=true,name=$select"`
    APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
    Timeout *int32 `queryParam:"style=form,explode=true,name=timeout"`
    
}

type ComputeNodeGetHeaders struct {
    ClientRequestID *string `header:"style=simple,explode=false,name=client-request-id"`
    OcpDate *string `header:"style=simple,explode=false,name=ocp-date"`
    ReturnClientRequestID *bool `header:"style=simple,explode=false,name=return-client-request-id"`
    
}

type ComputeNodeGetRequest struct {
    PathParams ComputeNodeGetPathParams 
    QueryParams ComputeNodeGetQueryParams 
    Headers ComputeNodeGetHeaders 
    
}

type ComputeNodeGetResponse struct {
    BatchError *interface{} 
    ComputeNode *interface{} 
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

