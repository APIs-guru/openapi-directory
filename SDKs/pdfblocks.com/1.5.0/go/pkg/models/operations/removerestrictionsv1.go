package operations

type RemoveRestrictionsV1RequestBodyFile struct {
	Content []byte `multipartForm:"content"`
	File    string `multipartForm:"name=file"`
}

type RemoveRestrictionsV1RequestBody struct {
	File RemoveRestrictionsV1RequestBodyFile `multipartForm:"file"`
}

type RemoveRestrictionsV1Request struct {
	Request RemoveRestrictionsV1RequestBody `request:"mediaType=multipart/form-data"`
}

type RemoveRestrictionsV14XxApplicationProblemPlusJSON struct {
	Errors map[string]interface{} `json:"errors,omitempty"`
	Status *int64                 `json:"status,omitempty"`
	Title  *string                `json:"title,omitempty"`
	Type   *string                `json:"type,omitempty"`
}

type RemoveRestrictionsV1Response struct {
	ContentType                                             string
	StatusCode                                              int64
	RemoveRestrictionsV1200ApplicationPdfBinaryString       []byte
	RemoveRestrictionsV14XxApplicationProblemPlusJSONObject *RemoveRestrictionsV14XxApplicationProblemPlusJSON
}
