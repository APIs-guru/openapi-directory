package operations



type GetObservationsByCodePathParams struct {
    Code string `pathParam:"style=simple,explode=false,name=code"`
    UserID int64 `pathParam:"style=simple,explode=false,name=userId"`
    
}

type GetObservationsByCodeRequest struct {
    PathParams GetObservationsByCodePathParams 
    
}

type GetObservationsByCodeResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

