package shared



type ControllersSystemPackageData struct {
    Description *string `json:"description,omitempty"`
    Evra *string `json:"evra,omitempty"`
    Name *string `json:"name,omitempty"`
    Summary *string `json:"summary,omitempty"`
    Updatable *bool `json:"updatable,omitempty"`
    Updates []ModelsPackageUpdate `json:"updates,omitempty"`
    
}

