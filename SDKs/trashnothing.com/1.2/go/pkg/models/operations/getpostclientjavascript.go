package operations

type GetPostClientJavascriptQueryParams struct {
	AccessToken string  `queryParam:"style=form,explode=true,name=access_token"`
	Callback    *string `queryParam:"style=form,explode=true,name=callback"`
	GroupIds    string  `queryParam:"style=form,explode=true,name=group_ids"`
}

type GetPostClientJavascriptRequest struct {
	QueryParams GetPostClientJavascriptQueryParams
}

type GetPostClientJavascriptResponse struct {
	ContentType string
	StatusCode  int64
}
