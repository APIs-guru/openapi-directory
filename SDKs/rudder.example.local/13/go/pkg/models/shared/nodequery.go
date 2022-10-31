package shared

type NodeQueryCompositionEnum string

const (
	NodeQueryCompositionEnumAnd NodeQueryCompositionEnum = "and"
	NodeQueryCompositionEnumOr  NodeQueryCompositionEnum = "or"
)

type NodeQueryWhere struct {
	Attribute  *string `json:"attribute,omitempty"`
	Comparator *string `json:"comparator,omitempty"`
	ObjectType *string `json:"objectType,omitempty"`
	Value      *string `json:"value,omitempty"`
}

type NodeQuery struct {
	Composition *NodeQueryCompositionEnum `json:"composition,omitempty"`
	Select      *string                   `json:"select,omitempty"`
	Where       []NodeQueryWhere          `json:"where,omitempty"`
}
