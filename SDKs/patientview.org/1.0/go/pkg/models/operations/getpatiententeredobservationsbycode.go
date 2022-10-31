package operations



type GetPatientEnteredObservationsByCodePathParams struct {
    Code string `pathParam:"style=simple,explode=false,name=code"`
    UserID int64 `pathParam:"style=simple,explode=false,name=userId"`
    
}

type GetPatientEnteredObservationsByCodeRequest struct {
    PathParams GetPatientEnteredObservationsByCodePathParams 
    
}

type GetPatientEnteredObservationsByCodeResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

