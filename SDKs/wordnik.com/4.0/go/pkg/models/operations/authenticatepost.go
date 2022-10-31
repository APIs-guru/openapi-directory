package operations



type AuthenticatePostPathParams struct {
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type AuthenticatePostRequest struct {
    PathParams AuthenticatePostPathParams 
    Request string `request:"mediaType=application/json"`
    
}

type AuthenticatePostResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

