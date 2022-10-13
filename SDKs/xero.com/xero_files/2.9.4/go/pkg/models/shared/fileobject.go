package shared

type FileObject struct {
	CreatedDateUtc *string `json:"CreatedDateUtc"`
	FolderID       *string `json:"FolderId"`
	ID             *string `json:"Id"`
	MimeType       *string `json:"MimeType"`
	Name           *string `json:"Name"`
	Size           *int64  `json:"Size"`
	UpdatedDateUtc *string `json:"UpdatedDateUtc"`
	User           *User   `json:"User"`
}
