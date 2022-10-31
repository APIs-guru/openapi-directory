package shared



type ControllersSystemPackageResponse struct {
    Data []ControllersSystemPackageData `json:"data,omitempty"`
    Links *ControllersLinks `json:"links,omitempty"`
    Meta *ControllersListMeta `json:"meta,omitempty"`
    
}

