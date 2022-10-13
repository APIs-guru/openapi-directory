package operations

type RemoveSignaturesV1RequestBodyFile struct {
	Content []byte `multipartForm:"content"`
	File    string `multipartForm:"name=file"`
}

type RemoveSignaturesV1RequestBody struct {
	File RemoveSignaturesV1RequestBodyFile `multipartForm:"file"`
}

type RemoveSignaturesV1Request struct {
	Request RemoveSignaturesV1RequestBody `request:"mediaType=multipart/form-data"`
}

type RemoveSignaturesV14XxApplicationProblemPlusJSON struct {
	Errors map[string]interface{} `json:"errors"`
	Status *int64                 `json:"status"`
	Title  *string                `json:"title"`
	Type   *string                `json:"type"`
}

type RemoveSignaturesV1Response struct {
	ContentType                                           string
	StatusCode                                            int64
	RemoveSignaturesV1200ApplicationPdfBinaryString       []byte
	RemoveSignaturesV14XxApplicationProblemPlusJSONObject *RemoveSignaturesV14XxApplicationProblemPlusJSON
}
