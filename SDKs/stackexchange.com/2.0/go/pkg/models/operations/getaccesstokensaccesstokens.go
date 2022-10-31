package operations



type GetAccessTokensAccessTokensPathParams struct {
    AccessTokens string `pathParam:"style=simple,explode=false,name=accessTokens"`
    
}

type GetAccessTokensAccessTokensQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    
}

type GetAccessTokensAccessTokensRequest struct {
    PathParams GetAccessTokensAccessTokensPathParams 
    QueryParams GetAccessTokensAccessTokensQueryParams 
    
}

type GetAccessTokensAccessTokensResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

