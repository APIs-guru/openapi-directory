package operations

type MergeDocumentsV1RequestBodyFile struct {
	Content []byte `multipartForm:"content"`
	File    string `multipartForm:"name=file"`
}

type MergeDocumentsV1RequestBody struct {
	File []MergeDocumentsV1RequestBodyFile `multipartForm:"name=file"`
}

type MergeDocumentsV1Request struct {
	Request MergeDocumentsV1RequestBody `request:"mediaType=multipart/form-data"`
}

type MergeDocumentsV14XxApplicationProblemPlusJSON struct {
	Errors map[string]interface{} `json:"errors"`
	Status *int64                 `json:"status"`
	Title  *string                `json:"title"`
	Type   *string                `json:"type"`
}

type MergeDocumentsV1Response struct {
	ContentType                                         string
	StatusCode                                          int64
	MergeDocumentsV1200ApplicationPdfBinaryString       []byte
	MergeDocumentsV14XxApplicationProblemPlusJSONObject *MergeDocumentsV14XxApplicationProblemPlusJSON
}
