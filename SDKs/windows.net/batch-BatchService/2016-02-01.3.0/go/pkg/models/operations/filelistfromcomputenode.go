package operations



type FileListFromComputeNodePathParams struct {
    NodeID string `pathParam:"style=simple,explode=false,name=nodeId"`
    PoolID string `pathParam:"style=simple,explode=false,name=poolId"`
    
}

type FileListFromComputeNodeQueryParams struct {
    DollarFilter *string `queryParam:"style=form,explode=true,name=$filter"`
    APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
    Maxresults *int32 `queryParam:"style=form,explode=true,name=maxresults"`
    Recursive *bool `queryParam:"style=form,explode=true,name=recursive"`
    Timeout *int32 `queryParam:"style=form,explode=true,name=timeout"`
    
}

type FileListFromComputeNodeHeaders struct {
    ClientRequestID *string `header:"style=simple,explode=false,name=client-request-id"`
    OcpDate *string `header:"style=simple,explode=false,name=ocp-date"`
    ReturnClientRequestID *bool `header:"style=simple,explode=false,name=return-client-request-id"`
    
}

type FileListFromComputeNodeRequest struct {
    PathParams FileListFromComputeNodePathParams 
    QueryParams FileListFromComputeNodeQueryParams 
    Headers FileListFromComputeNodeHeaders 
    
}

type FileListFromComputeNodeResponse struct {
    BatchError *interface{} 
    ContentType string 
    Headers map[string][]string 
    NodeFileListResult *interface{} 
    StatusCode int64 
    
}

