package shared

type PagedUserResponse struct {
	Content []UserResponse `json:"content"`
	Links   []interface{}  `json:"links"`
	Page    *interface{}   `json:"page"`
}
