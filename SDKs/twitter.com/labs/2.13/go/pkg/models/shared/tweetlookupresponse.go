package shared



type TweetLookupResponse struct {
    Data []interface{} `json:"data,omitempty"`
    Errors []interface{} `json:"errors,omitempty"`
    Includes *Expansions `json:"includes,omitempty"`
    
}

