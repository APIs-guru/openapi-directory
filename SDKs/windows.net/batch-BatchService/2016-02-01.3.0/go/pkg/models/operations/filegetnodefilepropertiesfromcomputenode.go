package operations



type FileGetNodeFilePropertiesFromComputeNodePathParams struct {
    FileName string `pathParam:"style=simple,explode=false,name=fileName"`
    NodeID string `pathParam:"style=simple,explode=false,name=nodeId"`
    PoolID string `pathParam:"style=simple,explode=false,name=poolId"`
    
}

type FileGetNodeFilePropertiesFromComputeNodeQueryParams struct {
    APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
    Timeout *int32 `queryParam:"style=form,explode=true,name=timeout"`
    
}

type FileGetNodeFilePropertiesFromComputeNodeHeaders struct {
    IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
    IfUnmodifiedSince *string `header:"style=simple,explode=false,name=If-Unmodified-Since"`
    ClientRequestID *string `header:"style=simple,explode=false,name=client-request-id"`
    OcpDate *string `header:"style=simple,explode=false,name=ocp-date"`
    ReturnClientRequestID *bool `header:"style=simple,explode=false,name=return-client-request-id"`
    
}

type FileGetNodeFilePropertiesFromComputeNodeRequest struct {
    PathParams FileGetNodeFilePropertiesFromComputeNodePathParams 
    QueryParams FileGetNodeFilePropertiesFromComputeNodeQueryParams 
    Headers FileGetNodeFilePropertiesFromComputeNodeHeaders 
    
}

type FileGetNodeFilePropertiesFromComputeNodeResponse struct {
    BatchError *interface{} 
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

