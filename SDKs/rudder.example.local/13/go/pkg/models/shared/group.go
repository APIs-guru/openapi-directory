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
	Attribute  *string `json:"attribute"`
	Comparator *string `json:"comparator"`
	ObjectType *string `json:"objectType"`
	Value      *string `json:"value"`
}

type GroupQuery struct {
	Composition *GroupQueryCompositionEnum `json:"composition"`
	Select      *string                    `json:"select"`
	Where       []GroupQueryWhere          `json:"where"`
}

type Group struct {
	Description *string           `json:"description"`
	DisplayName *string           `json:"displayName"`
	Dynamic     *bool             `json:"dynamic"`
	Enabled     *bool             `json:"enabled"`
	GroupClass  []string          `json:"groupClass"`
	ID          *string           `json:"id"`
	NodeIds     []string          `json:"nodeIds"`
	Properties  []GroupProperties `json:"properties"`
	Query       *GroupQuery       `json:"query"`
}
