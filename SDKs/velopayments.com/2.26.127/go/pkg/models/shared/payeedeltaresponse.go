package shared



type PayeeDeltaResponse struct {
    Content []PayeeDelta `json:"content,omitempty"`
    Links []interface{} `json:"links,omitempty"`
    Page *interface{} `json:"page,omitempty"`
    
}

