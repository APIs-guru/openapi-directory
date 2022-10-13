package shared

type FolderMenuConfiguration struct {
	BrowserTimeZoneName *string          `json:"BrowserTimeZoneName"`
	BrowserUtcTime      *string          `json:"BrowserUtcTime"`
	Items               []FolderMenuItem `json:"Items"`
}
