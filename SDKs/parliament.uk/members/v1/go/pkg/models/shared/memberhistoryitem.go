package shared

type MemberHistoryItem struct {
	Links []Link         `json:"links,omitempty"`
	Value *MemberHistory `json:"value,omitempty"`
}
