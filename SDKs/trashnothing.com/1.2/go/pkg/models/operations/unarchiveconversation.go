package operations

type UnarchiveConversationPathParams struct {
	ConversationID string `pathParam:"style=simple,explode=false,name=conversation_id"`
}

type UnarchiveConversationRequest struct {
	PathParams UnarchiveConversationPathParams
}

type UnarchiveConversationResponse struct {
	ContentType string
	StatusCode  int64
}
