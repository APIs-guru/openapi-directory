package operations



type ApplicationListQueryParams struct {
    APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
    Maxresults *int32 `queryParam:"style=form,explode=true,name=maxresults"`
    Timeout *int32 `queryParam:"style=form,explode=true,name=timeout"`
    
}

type ApplicationListHeaders struct {
    ClientRequestID *string `header:"style=simple,explode=false,name=client-request-id"`
    OcpDate *string `header:"style=simple,explode=false,name=ocp-date"`
    ReturnClientRequestID *bool `header:"style=simple,explode=false,name=return-client-request-id"`
    
}

type ApplicationListRequest struct {
    QueryParams ApplicationListQueryParams 
    Headers ApplicationListHeaders 
    
}

type ApplicationListResponse struct {
    ApplicationListResult *interface{} 
    BatchError *interface{} 
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

