package operations



type FileGetFromTaskPathParams struct {
    FileName string `pathParam:"style=simple,explode=false,name=fileName"`
    JobID string `pathParam:"style=simple,explode=false,name=jobId"`
    TaskID string `pathParam:"style=simple,explode=false,name=taskId"`
    
}

type FileGetFromTaskQueryParams struct {
    APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
    Timeout *int32 `queryParam:"style=form,explode=true,name=timeout"`
    
}

type FileGetFromTaskHeaders struct {
    IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
    IfUnmodifiedSince *string `header:"style=simple,explode=false,name=If-Unmodified-Since"`
    ClientRequestID *string `header:"style=simple,explode=false,name=client-request-id"`
    OcpDate *string `header:"style=simple,explode=false,name=ocp-date"`
    OcpRange *string `header:"style=simple,explode=false,name=ocp-range"`
    ReturnClientRequestID *bool `header:"style=simple,explode=false,name=return-client-request-id"`
    
}

type FileGetFromTaskRequest struct {
    PathParams FileGetFromTaskPathParams 
    QueryParams FileGetFromTaskQueryParams 
    Headers FileGetFromTaskHeaders 
    
}

type FileGetFromTaskResponse struct {
    BatchError *interface{} 
    ContentType string 
    FileGetFromTask200ApplicationJSONBinaryString []byte 
    Headers map[string][]string 
    StatusCode int64 
    
}

