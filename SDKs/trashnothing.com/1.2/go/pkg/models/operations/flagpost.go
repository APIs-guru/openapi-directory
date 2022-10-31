package operations

type FlagPostPathParams struct {
	PostID string `pathParam:"style=simple,explode=false,name=post_id"`
}

type FlagPostRequestBody struct {
	Details *string `multipartForm:"name=details"`
	Reason  string  `multipartForm:"name=reason"`
}

type FlagPostRequest struct {
	PathParams FlagPostPathParams
	Request    FlagPostRequestBody `request:"mediaType=multipart/form-data"`
}

type FlagPostResponse struct {
	ContentType string
	StatusCode  int64
}
