package operations



type JobScheduleTerminatePathParams struct {
    JobScheduleID string `pathParam:"style=simple,explode=false,name=jobScheduleId"`
    
}

type JobScheduleTerminateQueryParams struct {
    APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
    Timeout *int32 `queryParam:"style=form,explode=true,name=timeout"`
    
}

type JobScheduleTerminateHeaders struct {
    IfMatch *string `header:"style=simple,explode=false,name=If-Match"`
    IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
    IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
    IfUnmodifiedSince *string `header:"style=simple,explode=false,name=If-Unmodified-Since"`
    ClientRequestID *string `header:"style=simple,explode=false,name=client-request-id"`
    OcpDate *string `header:"style=simple,explode=false,name=ocp-date"`
    ReturnClientRequestID *bool `header:"style=simple,explode=false,name=return-client-request-id"`
    
}

type JobScheduleTerminateRequest struct {
    PathParams JobScheduleTerminatePathParams 
    QueryParams JobScheduleTerminateQueryParams 
    Headers JobScheduleTerminateHeaders 
    
}

type JobScheduleTerminateResponse struct {
    BatchError *interface{} 
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

