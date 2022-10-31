package operations



type ComputeNodeUpdateUserPathParams struct {
    NodeID string `pathParam:"style=simple,explode=false,name=nodeId"`
    PoolID string `pathParam:"style=simple,explode=false,name=poolId"`
    UserName string `pathParam:"style=simple,explode=false,name=userName"`
    
}

type ComputeNodeUpdateUserQueryParams struct {
    APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
    Timeout *int32 `queryParam:"style=form,explode=true,name=timeout"`
    
}

type ComputeNodeUpdateUserHeaders struct {
    ClientRequestID *string `header:"style=simple,explode=false,name=client-request-id"`
    OcpDate *string `header:"style=simple,explode=false,name=ocp-date"`
    ReturnClientRequestID *bool `header:"style=simple,explode=false,name=return-client-request-id"`
    
}

type ComputeNodeUpdateUserRequest struct {
    PathParams ComputeNodeUpdateUserPathParams 
    QueryParams ComputeNodeUpdateUserQueryParams 
    Headers ComputeNodeUpdateUserHeaders 
    Request interface{} `request:"mediaType=application/json"`
    
}

type ComputeNodeUpdateUserResponse struct {
    BatchError *interface{} 
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

