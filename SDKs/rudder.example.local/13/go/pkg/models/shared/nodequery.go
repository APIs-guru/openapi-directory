package shared

type NodeQueryCompositionEnum string

const (
	NodeQueryCompositionEnumAnd NodeQueryCompositionEnum = "and"
	NodeQueryCompositionEnumOr  NodeQueryCompositionEnum = "or"
)

type NodeQueryWhere struct {
	Attribute  *string `json:"attribute"`
	Comparator *string `json:"comparator"`
	ObjectType *string `json:"objectType"`
	Value      *string `json:"value"`
}

type NodeQuery struct {
	Composition *NodeQueryCompositionEnum `json:"composition"`
	Select      *string                   `json:"select"`
	Where       []NodeQueryWhere          `json:"where"`
}
