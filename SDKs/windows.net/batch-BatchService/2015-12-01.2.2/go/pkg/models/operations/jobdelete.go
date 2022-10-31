package operations



type JobDeletePathParams struct {
    JobID string `pathParam:"style=simple,explode=false,name=jobId"`
    
}

type JobDeleteQueryParams struct {
    APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
    Timeout *int32 `queryParam:"style=form,explode=true,name=timeout"`
    
}

type JobDeleteHeaders struct {
    IfMatch *string `header:"style=simple,explode=false,name=If-Match"`
    IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
    IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
    IfUnmodifiedSince *string `header:"style=simple,explode=false,name=If-Unmodified-Since"`
    ClientRequestID *string `header:"style=simple,explode=false,name=client-request-id"`
    OcpDate *string `header:"style=simple,explode=false,name=ocp-date"`
    ReturnClientRequestID *bool `header:"style=simple,explode=false,name=return-client-request-id"`
    
}

type JobDeleteRequest struct {
    PathParams JobDeletePathParams 
    QueryParams JobDeleteQueryParams 
    Headers JobDeleteHeaders 
    
}

type JobDeleteResponse struct {
    BatchError *interface{} 
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

