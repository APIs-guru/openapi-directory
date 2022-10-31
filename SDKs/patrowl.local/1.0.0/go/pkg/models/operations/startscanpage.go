package operations



type StartScanPageRequest struct {
    Request interface{} `request:"mediaType=application/json"`
    
}

type StartScanPageResponse struct {
    APIResponse *interface{} 
    ContentType string 
    StatusCode int64 
    
}

