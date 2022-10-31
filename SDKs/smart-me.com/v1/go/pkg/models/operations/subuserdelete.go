package operations

type SubUserDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type SubUserDeleteRequest struct {
	PathParams SubUserDeletePathParams
}

type SubUserDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
