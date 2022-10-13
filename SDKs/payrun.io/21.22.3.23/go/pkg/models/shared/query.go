package shared

type QueryQueryGroupsGroup struct {
	Group []interface{} `json:"Group"`
}

type QueryQueryVariablesVariable struct {
	Variable []interface{} `json:"Variable"`
}

type QueryQueryQuery struct {
	ExcludeNullOrEmptyElements *bool                        `json:"ExcludeNullOrEmptyElements"`
	Groups                     *QueryQueryGroupsGroup       `json:"Groups"`
	RootNodeName               *string                      `json:"RootNodeName"`
	SuppressMetricAttributes   *bool                        `json:"SuppressMetricAttributes"`
	Variables                  *QueryQueryVariablesVariable `json:"Variables"`
}

type Query struct {
	Query *QueryQueryQuery `json:"Query"`
}
