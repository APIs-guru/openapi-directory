package shared

// InputInformation
// Informations about the Inputs of a Meter or Folder
type InputInformation struct {
	Name   *string `json:"Name,omitempty"`
	Number *int32  `json:"Number,omitempty"`
}
