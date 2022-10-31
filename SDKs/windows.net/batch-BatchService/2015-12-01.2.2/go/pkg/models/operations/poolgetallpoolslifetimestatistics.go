package operations



type PoolGetAllPoolsLifetimeStatisticsQueryParams struct {
    APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
    Timeout *int32 `queryParam:"style=form,explode=true,name=timeout"`
    
}

type PoolGetAllPoolsLifetimeStatisticsHeaders struct {
    ClientRequestID *string `header:"style=simple,explode=false,name=client-request-id"`
    OcpDate *string `header:"style=simple,explode=false,name=ocp-date"`
    ReturnClientRequestID *bool `header:"style=simple,explode=false,name=return-client-request-id"`
    
}

type PoolGetAllPoolsLifetimeStatisticsRequest struct {
    QueryParams PoolGetAllPoolsLifetimeStatisticsQueryParams 
    Headers PoolGetAllPoolsLifetimeStatisticsHeaders 
    
}

type PoolGetAllPoolsLifetimeStatisticsResponse struct {
    BatchError *interface{} 
    ContentType string 
    Headers map[string][]string 
    PoolStatistics *interface{} 
    StatusCode int64 
    
}

