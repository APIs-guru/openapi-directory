package shared

type User struct {
	ChildUsers  []User   `json:"ChildUsers"`
	Email       *string  `json:"Email"`
	ID          *int64   `json:"Id"`
	IDAsString  *string  `json:"IdAsString"`
	IsAdmin     *bool    `json:"IsAdmin"`
	Permissions []string `json:"Permissions"`
	Username    *string  `json:"Username"`
}
