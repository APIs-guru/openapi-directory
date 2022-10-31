package shared



type UserListResult struct {
    OdataNextLink *string `json:"odata.nextLink,omitempty"`
    Value []map[string]map[string]interface{} `json:"value,omitempty"`
    
}

