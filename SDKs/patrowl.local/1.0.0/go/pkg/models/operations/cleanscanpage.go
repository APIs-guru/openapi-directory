package operations



type CleanScanPagePathParams struct {
    ScanID int64 `pathParam:"style=simple,explode=false,name=scanId"`
    
}

type CleanScanPageRequest struct {
    PathParams CleanScanPagePathParams 
    
}

type CleanScanPageResponse struct {
    APIResponse *interface{} 
    ContentType string 
    StatusCode int64 
    
}

