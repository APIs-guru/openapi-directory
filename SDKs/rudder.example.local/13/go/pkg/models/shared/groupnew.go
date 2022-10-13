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
	Attribute  *string `json:"attribute"`
	Comparator *string `json:"comparator"`
	ObjectType *string `json:"objectType"`
	Value      *string `json:"value"`
}

type GroupNewQuery struct {
	Composition *GroupNewQueryCompositionEnum `json:"composition"`
	Select      *string                       `json:"select"`
	Where       []GroupNewQueryWhere          `json:"where"`
}

type GroupNew struct {
	Category    string               `json:"category"`
	Description *string              `json:"description"`
	DisplayName string               `json:"displayName"`
	Dynamic     *bool                `json:"dynamic"`
	Enabled     *bool                `json:"enabled"`
	ID          *string              `json:"id"`
	Properties  []GroupNewProperties `json:"properties"`
	Query       *GroupNewQuery       `json:"query"`
	Source      *string              `json:"source"`
}
