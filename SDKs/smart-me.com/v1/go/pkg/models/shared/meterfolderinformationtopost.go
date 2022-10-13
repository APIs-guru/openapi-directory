package shared

type MeterFolderInformationToPost struct {
	ID   *string `json:"Id" form:"name=Id"`
	Name *string `json:"Name" form:"name=Name"`
}
