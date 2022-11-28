package shared

type GroupUpdateQueryCompositionEnum string

const (
	GroupUpdateQueryCompositionEnumAnd GroupUpdateQueryCompositionEnum = "and"
	GroupUpdateQueryCompositionEnumOr  GroupUpdateQueryCompositionEnum = "or"
)

type GroupUpdateQueryWhere struct {
	Attribute  *string `json:"attribute,omitempty"`
	Comparator *string `json:"comparator,omitempty"`
	ObjectType *string `json:"objectType,omitempty"`
	Value      *string `json:"value,omitempty"`
}

// GroupUpdateQuery
// The criteria defining the group. If not provided, the group will be empty.
type GroupUpdateQuery struct {
	Composition *GroupUpdateQueryCompositionEnum `json:"composition,omitempty"`
	Select      *string                          `json:"select,omitempty"`
	Where       []GroupUpdateQueryWhere          `json:"where,omitempty"`
}

type GroupUpdate struct {
	Category    *string           `json:"category,omitempty"`
	Description *string           `json:"description,omitempty"`
	DisplayName *string           `json:"displayName,omitempty"`
	Dynamic     *bool             `json:"dynamic,omitempty"`
	Enabled     *bool             `json:"enabled,omitempty"`
	Query       *GroupUpdateQuery `json:"query,omitempty"`
}
