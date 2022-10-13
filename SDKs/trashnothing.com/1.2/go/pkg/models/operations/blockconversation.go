package operations

type BlockConversationPathParams struct {
	ConversationID string `pathParam:"style=simple,explode=false,name=conversation_id"`
}

type BlockConversationRequest struct {
	PathParams BlockConversationPathParams
}

type BlockConversationResponse struct {
	ContentType string
	StatusCode  int64
}
