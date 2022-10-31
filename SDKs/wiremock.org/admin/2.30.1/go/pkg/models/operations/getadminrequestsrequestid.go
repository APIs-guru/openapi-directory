package operations



type GetAdminRequestsRequestIDPathParams struct {
    RequestID string `pathParam:"style=simple,explode=false,name=requestId"`
    
}

type GetAdminRequestsRequestIDRequest struct {
    PathParams GetAdminRequestsRequestIDPathParams 
    
}

type GetAdminRequestsRequestIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

