package operations



type GetErrorsIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetErrorsIDRequest struct {
    PathParams GetErrorsIDPathParams 
    
}

type GetErrorsIDResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

