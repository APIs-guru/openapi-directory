package shared

type GovernmentDepartment struct {
	ID       *int32  `json:"id"`
	ImageURL *string `json:"imageUrl"`
	Name     *string `json:"name"`
	URL      *string `json:"url"`
}
