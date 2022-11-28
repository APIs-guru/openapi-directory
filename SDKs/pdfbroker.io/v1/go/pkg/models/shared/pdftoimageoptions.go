package shared

type PdfToImageOptions struct {
	Height               *int32   `json:"Height,omitempty"`
	HorizontalResolution *float64 `json:"HorizontalResolution,omitempty"`
	ImageFormat          *string  `json:"ImageFormat,omitempty"`
	JpegQuality          *int32   `json:"JpegQuality,omitempty"`
	PageNumber           *int32   `json:"PageNumber,omitempty"`
	PngCompressionLevel  *int32   `json:"PngCompressionLevel,omitempty"`
	Transparent          *bool    `json:"Transparent,omitempty"`
	VerticalResolution   *float64 `json:"VerticalResolution,omitempty"`
	Width                *int32   `json:"Width,omitempty"`
}
