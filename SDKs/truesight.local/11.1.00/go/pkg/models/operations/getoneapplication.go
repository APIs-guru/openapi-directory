package operations



type GetOneApplicationPathParams struct {
    ApplicationID string `pathParam:"style=simple,explode=false,name=applicationId"`
    
}

type GetOneApplicationRequest struct {
    PathParams GetOneApplicationPathParams 
    
}

type GetOneApplicationResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

