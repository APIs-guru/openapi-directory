package operations

type RemovePagesV1RequestBodyFile struct {
	Content []byte `multipartForm:"content"`
	File    string `multipartForm:"name=file"`
}

type RemovePagesV1RequestBody struct {
	File      RemovePagesV1RequestBodyFile `multipartForm:"file"`
	FirstPage *int32                       `multipartForm:"name=first_page"`
	LastPage  *int32                       `multipartForm:"name=last_page"`
}

type RemovePagesV1Request struct {
	Request RemovePagesV1RequestBody `request:"mediaType=multipart/form-data"`
}

type RemovePagesV14XxApplicationProblemPlusJSON struct {
	Errors map[string]interface{} `json:"errors"`
	Status *int64                 `json:"status"`
	Title  *string                `json:"title"`
	Type   *string                `json:"type"`
}

type RemovePagesV1Response struct {
	ContentType                                      string
	StatusCode                                       int64
	RemovePagesV1200ApplicationPdfBinaryString       []byte
	RemovePagesV14XxApplicationProblemPlusJSONObject *RemovePagesV14XxApplicationProblemPlusJSON
}
