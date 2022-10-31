package shared



type ControllersSystemAdvisoriesResponse struct {
    Data []ControllersSystemAdvisoryItem `json:"data,omitempty"`
    Links *ControllersLinks `json:"links,omitempty"`
    Meta *ControllersListMeta `json:"meta,omitempty"`
    
}

