package shared

type AttachmentViewModel struct {
	FileSizeBytes *int64  `json:"fileSizeBytes,omitempty"`
	FileType      *string `json:"fileType,omitempty"`
	Title         *string `json:"title,omitempty"`
	URL           *string `json:"url,omitempty"`
}
