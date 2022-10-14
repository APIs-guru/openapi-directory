package shared

type DiscoveredParticipantCodeCodeEnum string

const (
	DiscoveredParticipantCodeCodeEnumOk  DiscoveredParticipantCodeCodeEnum = "OK"
	DiscoveredParticipantCodeCodeEnumNok DiscoveredParticipantCodeCodeEnum = "NOK"
)

type DiscoveredParticipant struct {
	Code  *DiscoveredParticipantCodeCodeEnum `json:"code,omitempty"`
	Email *bool                              `json:"email,omitempty"`
}
