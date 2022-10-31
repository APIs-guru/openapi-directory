package shared

type FolderMenuConfiguration struct {
	BrowserTimeZoneName *string          `json:"BrowserTimeZoneName,omitempty"`
	BrowserUtcTime      *string          `json:"BrowserUtcTime,omitempty"`
	Items               []FolderMenuItem `json:"Items,omitempty"`
}
