package operations

type GetOneServicePathParams struct {
	ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
}

type GetOneServiceRequest struct {
	PathParams GetOneServicePathParams
}

type GetOneServiceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
