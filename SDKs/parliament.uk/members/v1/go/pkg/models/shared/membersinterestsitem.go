package shared

type MembersInterestsItem struct {
	Links []Link            `json:"links,omitempty"`
	Value *MembersInterests `json:"value,omitempty"`
}
