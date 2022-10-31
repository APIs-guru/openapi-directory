package operations



type GetBasicUserInformationPathParams struct {
    Token string `pathParam:"style=simple,explode=false,name=token"`
    
}

type GetBasicUserInformationRequest struct {
    PathParams GetBasicUserInformationPathParams 
    
}

type GetBasicUserInformationResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

