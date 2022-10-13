package shared

type MessageConversation struct {
	ID *string `json:"id"`
}

type MessageMedia struct {
	Filename *string `json:"filename"`
	Type     *string `json:"type"`
	URL      *string `json:"url"`
}

type Message struct {
	Contact      *ContactIdentifiers  `json:"contact"`
	Conversation *MessageConversation `json:"conversation"`
	Created      *Updated             `json:"created"`
	Error        *Error               `json:"error"`
	ID           *string              `json:"id"`
	Media        []MessageMedia       `json:"media"`
	Message      *string              `json:"message"`
	Outgoing     *bool                `json:"outgoing"`
	PhoneNumber  *string              `json:"phoneNumber"`
	Price        *float64             `json:"price"`
	Read         *bool                `json:"read"`
	Segments     *float64             `json:"segments"`
	Status       *string              `json:"status"`
	Template     *string              `json:"template"`
	Updated      *Updated             `json:"updated"`
}
