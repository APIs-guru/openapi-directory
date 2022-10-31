package operations

type LogOutPathParams struct {
	Token string `pathParam:"style=simple,explode=false,name=token"`
}

type LogOutRequest struct {
	PathParams LogOutPathParams
}

type LogOutResponse struct {
	ContentType string
	StatusCode  int64
}
