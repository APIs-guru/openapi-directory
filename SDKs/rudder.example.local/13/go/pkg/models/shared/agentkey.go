package shared

type AgentKeyStatusEnum string

const (
	AgentKeyStatusEnumCertified AgentKeyStatusEnum = "certified"
	AgentKeyStatusEnumUndefined AgentKeyStatusEnum = "undefined"
)

// AgentKey
// Information about agent key or certificate
type AgentKey struct {
	Status *AgentKeyStatusEnum `json:"status,omitempty"`
	Value  string              `json:"value"`
}
