package shared

// PdfWriteStringOptionsInput
// Options for writing string in pdf page;
type PdfWriteStringOptionsInput struct {
	Font       *FontDtoInput `json:"Font,omitempty"`
	PageNumber *int32        `json:"PageNumber,omitempty"`
	Text       *string       `json:"Text,omitempty"`
	XOrigin    *int32        `json:"XOrigin,omitempty"`
	XPosition  *float32      `json:"XPosition,omitempty"`
	YOrigin    *int32        `json:"YOrigin,omitempty"`
	YPosition  *float32      `json:"YPosition,omitempty"`
}
