package shared

type UserMessageContractInboxEnum string

const (
	UserMessageContractInboxEnumNothing       UserMessageContractInboxEnum = "Nothing"
	UserMessageContractInboxEnumReceived      UserMessageContractInboxEnum = "Received"
	UserMessageContractInboxEnumSent          UserMessageContractInboxEnum = "Sent"
	UserMessageContractInboxEnumNotifications UserMessageContractInboxEnum = "Notifications"
)

type UserMessageContract struct {
	Body             *string                       `json:"body,omitempty"`
	CreatedFormatted *string                       `json:"createdFormatted,omitempty"`
	HighPriority     *bool                         `json:"highPriority,omitempty"`
	ID               *int32                        `json:"id,omitempty"`
	Inbox            *UserMessageContractInboxEnum `json:"inbox,omitempty"`
	Read             *bool                         `json:"read,omitempty"`
	Receiver         *UserForAPIContract           `json:"receiver,omitempty"`
	Sender           *UserForAPIContract           `json:"sender,omitempty"`
	Subject          *string                       `json:"subject,omitempty"`
}
