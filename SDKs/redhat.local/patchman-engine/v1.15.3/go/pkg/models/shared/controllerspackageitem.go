package shared



type ControllersPackageItem struct {
    Name *string `json:"name,omitempty"`
    Summary *string `json:"summary,omitempty"`
    SystemsInstalled *int64 `json:"systems_installed,omitempty"`
    SystemsUpdatable *int64 `json:"systems_updatable,omitempty"`
    
}

