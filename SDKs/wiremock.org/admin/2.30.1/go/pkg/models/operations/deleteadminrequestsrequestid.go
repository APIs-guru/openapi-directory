package operations

type DeleteAdminRequestsRequestIDPathParams struct {
	RequestID string `pathParam:"style=simple,explode=false,name=requestId"`
}

type DeleteAdminRequestsRequestIDRequest struct {
	PathParams DeleteAdminRequestsRequestIDPathParams
}

type DeleteAdminRequestsRequestIDResponse struct {
	ContentType string
	StatusCode  int64
}
