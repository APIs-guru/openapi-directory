package shared



type ControllersPackagesResponse struct {
    Data []ControllersPackageItem `json:"data,omitempty"`
    Links *ControllersLinks `json:"links,omitempty"`
    Meta *ControllersListMeta `json:"meta,omitempty"`
    
}

