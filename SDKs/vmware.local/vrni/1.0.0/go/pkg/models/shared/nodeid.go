package shared

type NodeID struct {
	EntityType *NodeTypeEnum `json:"entity_type"`
	ID         *string       `json:"id"`
}
