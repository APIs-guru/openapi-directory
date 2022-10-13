package shared

type MemberFocusListItem struct {
	Links []Link        `json:"links"`
	Value []MemberFocus `json:"value"`
}
