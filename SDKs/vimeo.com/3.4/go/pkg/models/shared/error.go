package shared



type Error struct {
    DeveloperMessage string `json:"developer_message"`
    Error string `json:"error"`
    ErrorCode float64 `json:"error_code"`
    Link string `json:"link"`
    
}

