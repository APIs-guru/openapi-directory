package shared



type Credit struct {
    Name string `json:"name"`
    Role string `json:"role"`
    URI string `json:"uri"`
    User *User `json:"user,omitempty"`
    Video *Video `json:"video,omitempty"`
    
}

