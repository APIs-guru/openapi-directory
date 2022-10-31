package shared

type GovernmentDepartment struct {
	ID       *int32  `json:"id,omitempty"`
	ImageURL *string `json:"imageUrl,omitempty"`
	Name     *string `json:"name,omitempty"`
	URL      *string `json:"url,omitempty"`
}
