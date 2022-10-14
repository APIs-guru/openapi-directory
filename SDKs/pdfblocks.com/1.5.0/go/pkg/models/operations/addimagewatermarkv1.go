package operations

type AddImageWatermarkV1RequestBodyFile struct {
	Content []byte `multipartForm:"content"`
	File    string `multipartForm:"name=file"`
}

type AddImageWatermarkV1RequestBodyImage struct {
	Content []byte `multipartForm:"content"`
	Image   string `multipartForm:"name=image"`
}

type AddImageWatermarkV1RequestBody struct {
	File         AddImageWatermarkV1RequestBodyFile  `multipartForm:"file"`
	Image        AddImageWatermarkV1RequestBodyImage `multipartForm:"file"`
	Margin       *float32                            `multipartForm:"name=margin"`
	Transparency *int32                              `multipartForm:"name=transparency"`
}

type AddImageWatermarkV1Request struct {
	Request AddImageWatermarkV1RequestBody `request:"mediaType=multipart/form-data"`
}

type AddImageWatermarkV14XxApplicationProblemPlusJSON struct {
	Errors map[string]interface{} `json:"errors,omitempty"`
	Status *int64                 `json:"status,omitempty"`
	Title  *string                `json:"title,omitempty"`
	Type   *string                `json:"type,omitempty"`
}

type AddImageWatermarkV1Response struct {
	ContentType                                            string
	StatusCode                                             int64
	AddImageWatermarkV1200ApplicationPdfBinaryString       []byte
	AddImageWatermarkV14XxApplicationProblemPlusJSONObject *AddImageWatermarkV14XxApplicationProblemPlusJSON
}
