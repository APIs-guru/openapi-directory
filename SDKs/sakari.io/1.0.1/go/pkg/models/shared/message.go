package shared

type MessageConversation struct {
	ID *string `json:"id,omitempty"`
}

type MessageMedia struct {
	Filename *string `json:"filename,omitempty"`
	Type     *string `json:"type,omitempty"`
	URL      *string `json:"url,omitempty"`
}

type Message struct {
	Contact      *ContactIdentifiers  `json:"contact,omitempty"`
	Conversation *MessageConversation `json:"conversation,omitempty"`
	Created      *Updated             `json:"created,omitempty"`
	Error        *Error               `json:"error,omitempty"`
	ID           *string              `json:"id,omitempty"`
	Media        []MessageMedia       `json:"media,omitempty"`
	Message      *string              `json:"message,omitempty"`
	Outgoing     *bool                `json:"outgoing,omitempty"`
	PhoneNumber  *string              `json:"phoneNumber,omitempty"`
	Price        *float64             `json:"price,omitempty"`
	Read         *bool                `json:"read,omitempty"`
	Segments     *float64             `json:"segments,omitempty"`
	Status       *string              `json:"status,omitempty"`
	Template     *string              `json:"template,omitempty"`
	Updated      *Updated             `json:"updated,omitempty"`
}
