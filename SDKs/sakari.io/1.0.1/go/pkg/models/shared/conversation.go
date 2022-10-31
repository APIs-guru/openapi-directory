package shared



type Conversation struct {
    Closed *bool `json:"closed,omitempty"`
    Contact *ContactIdentifiers `json:"contact,omitempty"`
    Created *Updated `json:"created,omitempty"`
    ID *string `json:"id,omitempty"`
    LastMessage *Message `json:"lastMessage,omitempty"`
    PhoneNumber *PhoneNumber `json:"phoneNumber,omitempty"`
    Unread []string `json:"unread,omitempty"`
    Updated *Updated `json:"updated,omitempty"`
    
}

