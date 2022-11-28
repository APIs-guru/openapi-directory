package shared

// FolderMenuConfiguration
// Container Class for the Web API representing a folder menu and it's items
type FolderMenuConfiguration struct {
	BrowserTimeZoneName *string          `json:"BrowserTimeZoneName,omitempty"`
	BrowserUtcTime      *string          `json:"BrowserUtcTime,omitempty"`
	Items               []FolderMenuItem `json:"Items,omitempty"`
}
