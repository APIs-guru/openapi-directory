package shared



type FlexV1Interaction struct {
    Channel *interface{} `json:"channel,omitempty"`
    Links map[string]interface{} `json:"links,omitempty"`
    Routing *interface{} `json:"routing,omitempty"`
    Sid *string `json:"sid,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

