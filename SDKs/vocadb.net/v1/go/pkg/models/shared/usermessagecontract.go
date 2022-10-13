package shared

type UserMessageContractInboxEnum string

const (
	UserMessageContractInboxEnumNothing       UserMessageContractInboxEnum = "Nothing"
	UserMessageContractInboxEnumReceived      UserMessageContractInboxEnum = "Received"
	UserMessageContractInboxEnumSent          UserMessageContractInboxEnum = "Sent"
	UserMessageContractInboxEnumNotifications UserMessageContractInboxEnum = "Notifications"
)

type UserMessageContract struct {
	Body             *string                       `json:"body"`
	CreatedFormatted *string                       `json:"createdFormatted"`
	HighPriority     *bool                         `json:"highPriority"`
	ID               *int32                        `json:"id"`
	Inbox            *UserMessageContractInboxEnum `json:"inbox"`
	Read             *bool                         `json:"read"`
	Receiver         *UserForAPIContract           `json:"receiver"`
	Sender           *UserForAPIContract           `json:"sender"`
	Subject          *string                       `json:"subject"`
}
