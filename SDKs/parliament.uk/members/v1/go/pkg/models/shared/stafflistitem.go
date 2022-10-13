package shared

type StaffListItem struct {
	Links []Link  `json:"links"`
	Value []Staff `json:"value"`
}
