package operations



type GetMyOrdersSellingByUUIDUUIDPathParams struct {
    UUID string `pathParam:"style=simple,explode=false,name=uuid"`
    
}

type GetMyOrdersSellingByUUIDUUIDRequest struct {
    PathParams GetMyOrdersSellingByUUIDUUIDPathParams 
    
}

type GetMyOrdersSellingByUUIDUUIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

