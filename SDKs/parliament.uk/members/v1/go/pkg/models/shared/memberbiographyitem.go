package shared

type MemberBiographyItem struct {
	Links []Link           `json:"links"`
	Value *MemberBiography `json:"value"`
}
