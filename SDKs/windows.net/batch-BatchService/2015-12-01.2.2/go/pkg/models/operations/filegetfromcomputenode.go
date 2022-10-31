package operations



type FileGetFromComputeNodePathParams struct {
    FileName string `pathParam:"style=simple,explode=false,name=fileName"`
    NodeID string `pathParam:"style=simple,explode=false,name=nodeId"`
    PoolID string `pathParam:"style=simple,explode=false,name=poolId"`
    
}

type FileGetFromComputeNodeQueryParams struct {
    APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
    Timeout *int32 `queryParam:"style=form,explode=true,name=timeout"`
    
}

type FileGetFromComputeNodeHeaders struct {
    IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
    IfUnmodifiedSince *string `header:"style=simple,explode=false,name=If-Unmodified-Since"`
    ClientRequestID *string `header:"style=simple,explode=false,name=client-request-id"`
    OcpDate *string `header:"style=simple,explode=false,name=ocp-date"`
    OcpRange *string `header:"style=simple,explode=false,name=ocp-range"`
    ReturnClientRequestID *bool `header:"style=simple,explode=false,name=return-client-request-id"`
    
}

type FileGetFromComputeNodeRequest struct {
    PathParams FileGetFromComputeNodePathParams 
    QueryParams FileGetFromComputeNodeQueryParams 
    Headers FileGetFromComputeNodeHeaders 
    
}

type FileGetFromComputeNodeResponse struct {
    BatchError *interface{} 
    ContentType string 
    FileGetFromComputeNode200ApplicationJSONBinaryString []byte 
    Headers map[string][]string 
    StatusCode int64 
    
}

