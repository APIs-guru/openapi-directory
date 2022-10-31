package shared



type ControllersPackageSystemsResponse struct {
    Data []ControllersPackageSystemItem `json:"data,omitempty"`
    Links *ControllersLinks `json:"links,omitempty"`
    Meta *ControllersListMeta `json:"meta,omitempty"`
    
}

