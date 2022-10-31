package shared

type DiscoveredParticipantCodeEnum string

const (
	DiscoveredParticipantCodeEnumOk  DiscoveredParticipantCodeEnum = "OK"
	DiscoveredParticipantCodeEnumNok DiscoveredParticipantCodeEnum = "NOK"
)

type DiscoveredParticipant struct {
	Code  *DiscoveredParticipantCodeEnum `json:"code,omitempty"`
	Email *bool                          `json:"email,omitempty"`
}
