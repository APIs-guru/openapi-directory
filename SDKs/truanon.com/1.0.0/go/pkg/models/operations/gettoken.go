package operations



type GetTokenQueryParams struct {
    ID *string `queryParam:"style=form,explode=true,name=id"`
    Service *string `queryParam:"style=form,explode=true,name=service"`
    
}

type GetTokenRequest struct {
    QueryParams GetTokenQueryParams 
    
}

type GetTokenResponse struct {
    ContentType string 
    StatusCode int64 
    
}

