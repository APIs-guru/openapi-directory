package operations



type PostAPIOauthAuthorizeQueryParams struct {
    ClientID string `queryParam:"style=form,explode=true,name=client_id"`
    ClientSecret *string `queryParam:"style=form,explode=true,name=client_secret"`
    RedirectURI string `queryParam:"style=form,explode=true,name=redirect_uri"`
    Scope *string `queryParam:"style=form,explode=true,name=scope"`
    State string `queryParam:"style=form,explode=true,name=state"`
    
}

type PostAPIOauthAuthorizeRequest struct {
    QueryParams PostAPIOauthAuthorizeQueryParams 
    
}

type PostAPIOauthAuthorizeResponse struct {
    Body []byte 
    ContentType string 
    Object map[string]interface{} 
    StatusCode int64 
    
}

