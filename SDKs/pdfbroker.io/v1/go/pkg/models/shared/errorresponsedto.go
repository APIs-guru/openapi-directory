package shared

type ErrorResponseDto struct {
	Description  *string `json:"Description"`
	ErrorMessage *string `json:"ErrorMessage"`
	StatusCode   *int32  `json:"StatusCode"`
}
