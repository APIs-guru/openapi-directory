package shared

type AttachmentContentTypeMeta struct {
	Description *string `json:"description"`
	Extension   *string `json:"extension"`
	Title       *string `json:"title"`
}

type AttachmentVariants struct {
	LargeURL *string `json:"large_url"`
	ThumbURL *string `json:"thumb_url"`
}

type Attachment struct {
	ContentType     *string                    `json:"content_type"`
	ContentTypeMeta *AttachmentContentTypeMeta `json:"content_type_meta"`
	CreatedAt       *string                    `json:"created_at"`
	FileName        *string                    `json:"file_name"`
	ID              *int64                     `json:"id"`
	OriginalURL     *string                    `json:"original_url"`
	Title           *string                    `json:"title"`
	Type            *string                    `json:"type"`
	UpdatedAt       *string                    `json:"updated_at"`
	Variants        *AttachmentVariants        `json:"variants"`
}
