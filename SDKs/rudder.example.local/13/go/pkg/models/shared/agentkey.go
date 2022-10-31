package shared

type AgentKeyStatusEnum string

const (
	AgentKeyStatusEnumCertified AgentKeyStatusEnum = "certified"
	AgentKeyStatusEnumUndefined AgentKeyStatusEnum = "undefined"
)

type AgentKey struct {
	Status *AgentKeyStatusEnum `json:"status,omitempty"`
	Value  string              `json:"value"`
}
