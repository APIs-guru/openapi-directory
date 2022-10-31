package shared



type PagedUserResponse struct {
    Content []UserResponse `json:"content,omitempty"`
    Links []interface{} `json:"links,omitempty"`
    Page *interface{} `json:"page,omitempty"`
    
}

