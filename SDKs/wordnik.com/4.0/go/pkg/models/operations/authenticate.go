package operations



type AuthenticatePathParams struct {
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type AuthenticateQueryParams struct {
    Password string `queryParam:"style=form,explode=true,name=password"`
    
}

type AuthenticateRequest struct {
    PathParams AuthenticatePathParams 
    QueryParams AuthenticateQueryParams 
    
}

type AuthenticateResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

