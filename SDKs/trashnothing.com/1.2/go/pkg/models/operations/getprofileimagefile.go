package operations

type GetProfileImageFilePathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=user_id"`
}

type GetProfileImageFileQueryParams struct {
	Default *string `queryParam:"style=form,explode=true,name=default"`
}

type GetProfileImageFileRequest struct {
	PathParams  GetProfileImageFilePathParams
	QueryParams GetProfileImageFileQueryParams
}

type GetProfileImageFileResponse struct {
	ContentType string
	StatusCode  int64
}
