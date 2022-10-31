package operations



type ComputeNodeDisableSchedulingPathParams struct {
    NodeID string `pathParam:"style=simple,explode=false,name=nodeId"`
    PoolID string `pathParam:"style=simple,explode=false,name=poolId"`
    
}

type ComputeNodeDisableSchedulingQueryParams struct {
    APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
    Timeout *int32 `queryParam:"style=form,explode=true,name=timeout"`
    
}

type ComputeNodeDisableSchedulingHeaders struct {
    ClientRequestID *string `header:"style=simple,explode=false,name=client-request-id"`
    OcpDate *string `header:"style=simple,explode=false,name=ocp-date"`
    ReturnClientRequestID *bool `header:"style=simple,explode=false,name=return-client-request-id"`
    
}

type ComputeNodeDisableSchedulingRequest struct {
    PathParams ComputeNodeDisableSchedulingPathParams 
    QueryParams ComputeNodeDisableSchedulingQueryParams 
    Headers ComputeNodeDisableSchedulingHeaders 
    Request *interface{} `request:"mediaType=application/json"`
    
}

type ComputeNodeDisableSchedulingResponse struct {
    BatchError *interface{} 
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

