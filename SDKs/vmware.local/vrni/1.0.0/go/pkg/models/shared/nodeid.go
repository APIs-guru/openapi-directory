package shared

type NodeID struct {
	EntityType *NodeTypeEnum `json:"entity_type,omitempty"`
	ID         *string       `json:"id,omitempty"`
}
