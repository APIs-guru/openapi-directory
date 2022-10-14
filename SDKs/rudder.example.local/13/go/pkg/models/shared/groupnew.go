package shared

type GroupNewProperties struct {
	Name  string      `json:"name"`
	Value interface{} `json:"value"`
}

type GroupNewQueryCompositionEnum string

const (
	GroupNewQueryCompositionEnumAnd GroupNewQueryCompositionEnum = "and"
	GroupNewQueryCompositionEnumOr  GroupNewQueryCompositionEnum = "or"
)

type GroupNewQueryWhere struct {
	Attribute  *string `json:"attribute,omitempty"`
	Comparator *string `json:"comparator,omitempty"`
	ObjectType *string `json:"objectType,omitempty"`
	Value      *string `json:"value,omitempty"`
}

type GroupNewQuery struct {
	Composition *GroupNewQueryCompositionEnum `json:"composition,omitempty"`
	Select      *string                       `json:"select,omitempty"`
	Where       []GroupNewQueryWhere          `json:"where,omitempty"`
}

type GroupNew struct {
	Category    string               `json:"category"`
	Description *string              `json:"description,omitempty"`
	DisplayName string               `json:"displayName"`
	Dynamic     *bool                `json:"dynamic,omitempty"`
	Enabled     *bool                `json:"enabled,omitempty"`
	ID          *string              `json:"id,omitempty"`
	Properties  []GroupNewProperties `json:"properties,omitempty"`
	Query       *GroupNewQuery       `json:"query,omitempty"`
	Source      *string              `json:"source,omitempty"`
}
