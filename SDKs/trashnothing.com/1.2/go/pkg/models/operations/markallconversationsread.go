package operations

type MarkAllConversationsReadRequestBody struct {
	MessageID string `multipartForm:"name=message_id"`
}

type MarkAllConversationsReadRequest struct {
	Request MarkAllConversationsReadRequestBody `request:"mediaType=multipart/form-data"`
}

type MarkAllConversationsReadResponse struct {
	ContentType string
	StatusCode  int64
}
