package operations

type ReplyToPostPathParams struct {
	PostID string `pathParam:"style=simple,explode=false,name=post_id"`
}

type ReplyToPostRequestBody struct {
	Message  string  `multipartForm:"name=message"`
	PhotoIds *string `multipartForm:"name=photo_ids"`
}

type ReplyToPostRequest struct {
	PathParams ReplyToPostPathParams
	Request    ReplyToPostRequestBody `request:"mediaType=multipart/form-data"`
}

type ReplyToPostResponse struct {
	ContentType string
	StatusCode  int64
}
