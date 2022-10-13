package shared

type Conversation struct {
	Closed      *bool               `json:"closed"`
	Contact     *ContactIdentifiers `json:"contact"`
	Created     *Updated            `json:"created"`
	ID          *string             `json:"id"`
	LastMessage *Message            `json:"lastMessage"`
	PhoneNumber *PhoneNumber        `json:"phoneNumber"`
	Unread      []string            `json:"unread"`
	Updated     *Updated            `json:"updated"`
}
