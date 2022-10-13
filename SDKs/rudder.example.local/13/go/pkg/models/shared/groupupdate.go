package shared

type GroupUpdateQueryCompositionEnum string

const (
	GroupUpdateQueryCompositionEnumAnd GroupUpdateQueryCompositionEnum = "and"
	GroupUpdateQueryCompositionEnumOr  GroupUpdateQueryCompositionEnum = "or"
)

type GroupUpdateQueryWhere struct {
	Attribute  *string `json:"attribute"`
	Comparator *string `json:"comparator"`
	ObjectType *string `json:"objectType"`
	Value      *string `json:"value"`
}

type GroupUpdateQuery struct {
	Composition *GroupUpdateQueryCompositionEnum `json:"composition"`
	Select      *string                          `json:"select"`
	Where       []GroupUpdateQueryWhere          `json:"where"`
}

type GroupUpdate struct {
	Category    *string           `json:"category"`
	Description *string           `json:"description"`
	DisplayName *string           `json:"displayName"`
	Dynamic     *bool             `json:"dynamic"`
	Enabled     *bool             `json:"enabled"`
	Query       *GroupUpdateQuery `json:"query"`
}
