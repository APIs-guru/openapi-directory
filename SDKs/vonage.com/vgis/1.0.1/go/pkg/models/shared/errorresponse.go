package shared

type ErrorResponse struct {
	ErrorCode    *string `json:"errorCode"`
	ErrorMessage *string `json:"errorMessage"`
	Errors       []Error `json:"errors"`
}
