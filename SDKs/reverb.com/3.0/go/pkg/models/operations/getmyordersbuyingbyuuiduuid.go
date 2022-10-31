package operations



type GetMyOrdersBuyingByUUIDUUIDPathParams struct {
    UUID string `pathParam:"style=simple,explode=false,name=uuid"`
    
}

type GetMyOrdersBuyingByUUIDUUIDRequest struct {
    PathParams GetMyOrdersBuyingByUUIDUUIDPathParams 
    
}

type GetMyOrdersBuyingByUUIDUUIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

