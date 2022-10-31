package shared



type PdfResponseDto struct {
    ErrorMessage *string `json:"ErrorMessage,omitempty"`
    PdfFileBase64String *string `json:"PdfFileBase64String,omitempty"`
    
}

