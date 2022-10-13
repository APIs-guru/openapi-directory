package shared

type NodeWhere struct {
	Attribute  *string `json:"attribute"`
	Comparator *string `json:"comparator"`
	ObjectType *string `json:"objectType"`
	Value      *string `json:"value"`
}
