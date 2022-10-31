package shared



type AttachmentContentTypeMeta struct {
    Description *string `json:"description,omitempty"`
    Extension *string `json:"extension,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

type AttachmentVariants struct {
    LargeURL *string `json:"large_url,omitempty"`
    ThumbURL *string `json:"thumb_url,omitempty"`
    
}

type Attachment struct {
    ContentType *string `json:"content_type,omitempty"`
    ContentTypeMeta *AttachmentContentTypeMeta `json:"content_type_meta,omitempty"`
    CreatedAt *string `json:"created_at,omitempty"`
    FileName *string `json:"file_name,omitempty"`
    ID *int64 `json:"id,omitempty"`
    OriginalURL *string `json:"original_url,omitempty"`
    Title *string `json:"title,omitempty"`
    Type *string `json:"type,omitempty"`
    UpdatedAt *string `json:"updated_at,omitempty"`
    Variants *AttachmentVariants `json:"variants,omitempty"`
    
}

