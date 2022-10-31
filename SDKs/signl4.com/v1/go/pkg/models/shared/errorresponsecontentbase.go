package shared



type ErrorResponseContentBase struct {
    Details *string `json:"details,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

