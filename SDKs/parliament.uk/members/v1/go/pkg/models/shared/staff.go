package shared

type Staff struct {
	Details  *string `json:"details"`
	Forename *string `json:"forename"`
	Surname  *string `json:"surname"`
	Title    *string `json:"title"`
}
