package operations

type GetAppsAccessTokensDeAuthenticatePathParams struct {
	AccessTokens string `pathParam:"style=simple,explode=false,name=accessTokens"`
}

type GetAppsAccessTokensDeAuthenticateQueryParams struct {
	Callback *string `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string `queryParam:"style=form,explode=true,name=filter"`
	Page     *int64  `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64  `queryParam:"style=form,explode=true,name=pagesize"`
}

type GetAppsAccessTokensDeAuthenticateRequest struct {
	PathParams  GetAppsAccessTokensDeAuthenticatePathParams
	QueryParams GetAppsAccessTokensDeAuthenticateQueryParams
}

type GetAppsAccessTokensDeAuthenticateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
