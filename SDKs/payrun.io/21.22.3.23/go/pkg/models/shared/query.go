package shared

type QueryQueryGroupsGroup struct {
	Group []interface{} `json:"Group,omitempty"`
}

type QueryQueryVariablesVariable struct {
	Variable []interface{} `json:"Variable,omitempty"`
}

type QueryQueryQuery struct {
	ExcludeNullOrEmptyElements *bool                        `json:"ExcludeNullOrEmptyElements,omitempty"`
	Groups                     *QueryQueryGroupsGroup       `json:"Groups,omitempty"`
	RootNodeName               *string                      `json:"RootNodeName,omitempty"`
	SuppressMetricAttributes   *bool                        `json:"SuppressMetricAttributes,omitempty"`
	Variables                  *QueryQueryVariablesVariable `json:"Variables,omitempty"`
}

type Query struct {
	Query *QueryQueryQuery `json:"Query,omitempty"`
}
