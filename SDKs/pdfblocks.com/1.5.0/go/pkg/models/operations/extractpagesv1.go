package operations

type ExtractPagesV1RequestBodyFile struct {
	Content []byte `multipartForm:"content"`
	File    string `multipartForm:"name=file"`
}

type ExtractPagesV1RequestBody struct {
	File      ExtractPagesV1RequestBodyFile `multipartForm:"file"`
	FirstPage *int32                        `multipartForm:"name=first_page"`
	LastPage  *int32                        `multipartForm:"name=last_page"`
}

type ExtractPagesV1Request struct {
	Request ExtractPagesV1RequestBody `request:"mediaType=multipart/form-data"`
}

type ExtractPagesV14XxApplicationProblemPlusJSON struct {
	Errors map[string]interface{} `json:"errors,omitempty"`
	Status *int64                 `json:"status,omitempty"`
	Title  *string                `json:"title,omitempty"`
	Type   *string                `json:"type,omitempty"`
}

type ExtractPagesV1Response struct {
	ContentType                                       string
	StatusCode                                        int64
	ExtractPagesV1200ApplicationPdfBinaryString       []byte
	ExtractPagesV14XxApplicationProblemPlusJSONObject *ExtractPagesV14XxApplicationProblemPlusJSON
}
