package operations



type GetAccessTokensAccessTokensInvalidatePathParams struct {
    AccessTokens string `pathParam:"style=simple,explode=false,name=accessTokens"`
    
}

type GetAccessTokensAccessTokensInvalidateQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    
}

type GetAccessTokensAccessTokensInvalidateRequest struct {
    PathParams GetAccessTokensAccessTokensInvalidatePathParams 
    QueryParams GetAccessTokensAccessTokensInvalidateQueryParams 
    
}

type GetAccessTokensAccessTokensInvalidateResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

