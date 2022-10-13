package shared

type AttachmentViewModel struct {
	FileSizeBytes *int64  `json:"fileSizeBytes"`
	FileType      *string `json:"fileType"`
	Title         *string `json:"title"`
	URL           *string `json:"url"`
}
