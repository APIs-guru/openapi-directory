package shared

type RegisteredInterestCategoryListItem struct {
	Links []Link                       `json:"links"`
	Value []RegisteredInterestCategory `json:"value"`
}
