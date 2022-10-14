package shared

type FileObject struct {
	CreatedDateUtc *string `json:"CreatedDateUtc,omitempty"`
	FolderID       *string `json:"FolderId,omitempty"`
	ID             *string `json:"Id,omitempty"`
	MimeType       *string `json:"MimeType,omitempty"`
	Name           *string `json:"Name,omitempty"`
	Size           *int64  `json:"Size,omitempty"`
	UpdatedDateUtc *string `json:"UpdatedDateUtc,omitempty"`
	User           *User   `json:"User,omitempty"`
}
