package shared

type MemberBiographyItem struct {
	Links []Link           `json:"links,omitempty"`
	Value *MemberBiography `json:"value,omitempty"`
}
