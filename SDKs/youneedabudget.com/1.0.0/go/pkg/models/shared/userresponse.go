package shared

type UserResponseData struct {
	User User `json:"user"`
}

type UserResponse struct {
	Data UserResponseData `json:"data"`
}
