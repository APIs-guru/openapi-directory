package shared



type SendMessagesRequestFilters struct {
    Attributes []map[string]interface{} `json:"attributes,omitempty"`
    Tags []string `json:"tags,omitempty"`
    
}

type SendMessagesRequestMedia struct {
    URL *string `json:"url,omitempty"`
    
}


type SendMessagesRequestTypeEnum string

const (
    SendMessagesRequestTypeEnumSms SendMessagesRequestTypeEnum = "SMS"
SendMessagesRequestTypeEnumMms SendMessagesRequestTypeEnum = "MMS"
)


type SendMessagesRequest struct {
    Contacts []ContactRequest `json:"contacts,omitempty"`
    ConversationStrategy *string `json:"conversationStrategy,omitempty"`
    Conversations []string `json:"conversations,omitempty"`
    Filters *SendMessagesRequestFilters `json:"filters,omitempty"`
    Media []SendMessagesRequestMedia `json:"media,omitempty"`
    Template *string `json:"template,omitempty"`
    Type *SendMessagesRequestTypeEnum `json:"type,omitempty"`
    
}

