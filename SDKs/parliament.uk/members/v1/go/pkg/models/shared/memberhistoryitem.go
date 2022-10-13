package shared

type MemberHistoryItem struct {
	Links []Link         `json:"links"`
	Value *MemberHistory `json:"value"`
}
