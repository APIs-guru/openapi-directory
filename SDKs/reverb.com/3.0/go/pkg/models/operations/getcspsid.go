package operations



type GetCspsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetCspsIDRequest struct {
    PathParams GetCspsIDPathParams 
    
}

type GetCspsIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

