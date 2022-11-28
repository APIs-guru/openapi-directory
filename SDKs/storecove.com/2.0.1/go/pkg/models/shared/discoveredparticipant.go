package shared

type DiscoveredParticipantCodeEnum string

const (
	DiscoveredParticipantCodeEnumOk  DiscoveredParticipantCodeEnum = "OK"
	DiscoveredParticipantCodeEnumNok DiscoveredParticipantCodeEnum = "NOK"
)

// DiscoveredParticipant
// A public identifier for this customer.
type DiscoveredParticipant struct {
	Code  *DiscoveredParticipantCodeEnum `json:"code,omitempty"`
	Email *bool                          `json:"email,omitempty"`
}
