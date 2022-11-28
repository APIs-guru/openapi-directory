package shared

// QueryQueryGroup
// The querys' groups
type QueryQueryGroup struct {
	Group []interface{} `json:"Group,omitempty"`
}

// QueryQueryVariable
// The querys' variables
type QueryQueryVariable struct {
	Variable []interface{} `json:"Variable,omitempty"`
}

type QueryQuery struct {
	ExcludeNullOrEmptyElements *bool               `json:"ExcludeNullOrEmptyElements,omitempty"`
	Groups                     *QueryQueryGroup    `json:"Groups,omitempty"`
	RootNodeName               *string             `json:"RootNodeName,omitempty"`
	SuppressMetricAttributes   *bool               `json:"SuppressMetricAttributes,omitempty"`
	Variables                  *QueryQueryVariable `json:"Variables,omitempty"`
}

type Query struct {
	Query *QueryQuery `json:"Query,omitempty"`
}
