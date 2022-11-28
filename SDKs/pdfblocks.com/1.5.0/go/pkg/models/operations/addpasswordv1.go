package operations

type AddPasswordV1RequestBodyEncryptionAlgorithmEnum string

const (
	AddPasswordV1RequestBodyEncryptionAlgorithmEnumAes128 AddPasswordV1RequestBodyEncryptionAlgorithmEnum = "AES-128"
	AddPasswordV1RequestBodyEncryptionAlgorithmEnumAes256 AddPasswordV1RequestBodyEncryptionAlgorithmEnum = "AES-256"
)

type AddPasswordV1RequestBodyFile struct {
	Content []byte `multipartForm:"content"`
	File    string `multipartForm:"name=file"`
}

type AddPasswordV1RequestBody struct {
	EncryptionAlgorithm *AddPasswordV1RequestBodyEncryptionAlgorithmEnum `multipartForm:"name=encryption_algorithm"`
	File                AddPasswordV1RequestBodyFile                     `multipartForm:"file"`
	Password            string                                           `multipartForm:"name=password"`
}

type AddPasswordV14XxApplicationProblemPlusJSON struct {
	Errors map[string]interface{} `json:"errors,omitempty"`
	Status *int64                 `json:"status,omitempty"`
	Title  *string                `json:"title,omitempty"`
	Type   *string                `json:"type,omitempty"`
}

type AddPasswordV1Request struct {
	Request AddPasswordV1RequestBody `request:"mediaType=multipart/form-data"`
}

type AddPasswordV1Response struct {
	ContentType                                      string
	StatusCode                                       int64
	AddPasswordV1200ApplicationPdfBinaryString       []byte
	AddPasswordV14XxApplicationProblemPlusJSONObject *AddPasswordV14XxApplicationProblemPlusJSON
}
