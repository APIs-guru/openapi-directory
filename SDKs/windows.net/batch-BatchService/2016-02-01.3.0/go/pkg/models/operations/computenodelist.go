package operations



type ComputeNodeListPathParams struct {
    PoolID string `pathParam:"style=simple,explode=false,name=poolId"`
    
}

type ComputeNodeListQueryParams struct {
    DollarFilter *string `queryParam:"style=form,explode=true,name=$filter"`
    DollarSelect *string `queryParam:"style=form,explode=true,name=$select"`
    APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
    Maxresults *int32 `queryParam:"style=form,explode=true,name=maxresults"`
    Timeout *int32 `queryParam:"style=form,explode=true,name=timeout"`
    
}

type ComputeNodeListHeaders struct {
    ClientRequestID *string `header:"style=simple,explode=false,name=client-request-id"`
    OcpDate *string `header:"style=simple,explode=false,name=ocp-date"`
    ReturnClientRequestID *bool `header:"style=simple,explode=false,name=return-client-request-id"`
    
}

type ComputeNodeListRequest struct {
    PathParams ComputeNodeListPathParams 
    QueryParams ComputeNodeListQueryParams 
    Headers ComputeNodeListHeaders 
    
}

type ComputeNodeListResponse struct {
    BatchError *interface{} 
    ComputeNodeListResult *interface{} 
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

