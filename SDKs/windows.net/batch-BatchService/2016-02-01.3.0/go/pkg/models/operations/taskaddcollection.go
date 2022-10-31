package operations



type TaskAddCollectionPathParams struct {
    JobID string `pathParam:"style=simple,explode=false,name=jobId"`
    
}

type TaskAddCollectionQueryParams struct {
    APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
    Timeout *int32 `queryParam:"style=form,explode=true,name=timeout"`
    
}

type TaskAddCollectionHeaders struct {
    ClientRequestID *string `header:"style=simple,explode=false,name=client-request-id"`
    OcpDate *string `header:"style=simple,explode=false,name=ocp-date"`
    ReturnClientRequestID *bool `header:"style=simple,explode=false,name=return-client-request-id"`
    
}

type TaskAddCollectionRequest struct {
    PathParams TaskAddCollectionPathParams 
    QueryParams TaskAddCollectionQueryParams 
    Headers TaskAddCollectionHeaders 
    Request interface{} `request:"mediaType=application/json"`
    
}

type TaskAddCollectionResponse struct {
    BatchError *interface{} 
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    TaskAddCollectionResult *interface{} 
    
}

