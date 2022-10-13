package operations

type PostAdminSettingsRequestBody struct {
	FixedDelay *float64 `json:"fixedDelay"`
}

type PostAdminSettingsRequest struct {
	Request PostAdminSettingsRequestBody `request:"mediaType=application/json"`
}

type PostAdminSettingsResponse struct {
	ContentType string
	StatusCode  int64
}
