package shared



type Expansions struct {
    Media []interface{} `json:"media,omitempty"`
    Places []interface{} `json:"places,omitempty"`
    Polls []Poll `json:"polls,omitempty"`
    Tweets []interface{} `json:"tweets,omitempty"`
    Users []interface{} `json:"users,omitempty"`
    
}

