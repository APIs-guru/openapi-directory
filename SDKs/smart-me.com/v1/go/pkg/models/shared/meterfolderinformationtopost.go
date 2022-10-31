package shared



type MeterFolderInformationToPost struct {
    ID *string `json:"Id,omitempty" form:"name=Id"`
    Name *string `json:"Name,omitempty" form:"name=Name"`
    
}

