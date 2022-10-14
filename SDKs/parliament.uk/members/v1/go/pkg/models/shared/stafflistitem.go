package shared

type StaffListItem struct {
	Links []Link  `json:"links,omitempty"`
	Value []Staff `json:"value,omitempty"`
}
