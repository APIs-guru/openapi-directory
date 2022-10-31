package shared

type GroupProperties struct {
	Name  string      `json:"name"`
	Value interface{} `json:"value"`
}

type GroupQueryCompositionEnum string

const (
	GroupQueryCompositionEnumAnd GroupQueryCompositionEnum = "and"
	GroupQueryCompositionEnumOr  GroupQueryCompositionEnum = "or"
)

type GroupQueryWhere struct {
	Attribute  *string `json:"attribute,omitempty"`
	Comparator *string `json:"comparator,omitempty"`
	ObjectType *string `json:"objectType,omitempty"`
	Value      *string `json:"value,omitempty"`
}

type GroupQuery struct {
	Composition *GroupQueryCompositionEnum `json:"composition,omitempty"`
	Select      *string                    `json:"select,omitempty"`
	Where       []GroupQueryWhere          `json:"where,omitempty"`
}

type Group struct {
	Description *string           `json:"description,omitempty"`
	DisplayName *string           `json:"displayName,omitempty"`
	Dynamic     *bool             `json:"dynamic,omitempty"`
	Enabled     *bool             `json:"enabled,omitempty"`
	GroupClass  []string          `json:"groupClass,omitempty"`
	ID          *string           `json:"id,omitempty"`
	NodeIds     []string          `json:"nodeIds,omitempty"`
	Properties  []GroupProperties `json:"properties,omitempty"`
	Query       *GroupQuery       `json:"query,omitempty"`
}
