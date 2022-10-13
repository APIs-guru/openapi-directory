package shared

type SendMessagesRequestFilters struct {
	Attributes []map[string]interface{} `json:"attributes"`
	Tags       []string                 `json:"tags"`
}

type SendMessagesRequestMedia struct {
	URL *string `json:"url"`
}

type SendMessagesRequestTypeEnum string

const (
	SendMessagesRequestTypeEnumSms SendMessagesRequestTypeEnum = "SMS"
	SendMessagesRequestTypeEnumMms SendMessagesRequestTypeEnum = "MMS"
)

type SendMessagesRequest struct {
	Contacts             []ContactRequest             `json:"contacts"`
	ConversationStrategy *string                      `json:"conversationStrategy"`
	Conversations        []string                     `json:"conversations"`
	Filters              *SendMessagesRequestFilters  `json:"filters"`
	Media                []SendMessagesRequestMedia   `json:"media"`
	Template             *string                      `json:"template"`
	Type                 *SendMessagesRequestTypeEnum `json:"type"`
}
