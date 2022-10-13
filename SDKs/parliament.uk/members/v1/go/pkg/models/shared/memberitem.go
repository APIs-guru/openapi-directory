package shared

type MemberItem struct {
	Links []Link  `json:"links"`
	Value *Member `json:"value"`
}
