package operations

type AddRestrictionsV1RequestBodyEncryptionAlgorithmEnum string

const (
	AddRestrictionsV1RequestBodyEncryptionAlgorithmEnumAes128 AddRestrictionsV1RequestBodyEncryptionAlgorithmEnum = "AES-128"
	AddRestrictionsV1RequestBodyEncryptionAlgorithmEnumAes256 AddRestrictionsV1RequestBodyEncryptionAlgorithmEnum = "AES-256"
)

type AddRestrictionsV1RequestBodyFile struct {
	Content []byte `multipartForm:"content"`
	File    string `multipartForm:"name=file"`
}

type AddRestrictionsV1RequestBody struct {
	AllowAccessibility       *bool                                                `multipartForm:"name=allow_accessibility"`
	AllowAssembleDocument    *bool                                                `multipartForm:"name=allow_assemble_document"`
	AllowChangeContent       *bool                                                `multipartForm:"name=allow_change_content"`
	AllowCommentAndFillForm  *bool                                                `multipartForm:"name=allow_comment_and_fill_form"`
	AllowCopyContent         *bool                                                `multipartForm:"name=allow_copy_content"`
	AllowFillForm            *bool                                                `multipartForm:"name=allow_fill_form"`
	AllowPrint               *bool                                                `multipartForm:"name=allow_print"`
	AllowPrintHighResolution *bool                                                `multipartForm:"name=allow_print_high_resolution"`
	EncryptionAlgorithm      *AddRestrictionsV1RequestBodyEncryptionAlgorithmEnum `multipartForm:"name=encryption_algorithm"`
	File                     AddRestrictionsV1RequestBodyFile                     `multipartForm:"file"`
	OwnerPassword            string                                               `multipartForm:"name=owner_password"`
	UserPassword             *string                                              `multipartForm:"name=user_password"`
}

type AddRestrictionsV1Request struct {
	Request AddRestrictionsV1RequestBody `request:"mediaType=multipart/form-data"`
}

type AddRestrictionsV14XxApplicationProblemPlusJSON struct {
	Errors map[string]interface{} `json:"errors"`
	Status *int64                 `json:"status"`
	Title  *string                `json:"title"`
	Type   *string                `json:"type"`
}

type AddRestrictionsV1Response struct {
	ContentType                                          string
	StatusCode                                           int64
	AddRestrictionsV1200ApplicationPdfBinaryString       []byte
	AddRestrictionsV14XxApplicationProblemPlusJSONObject *AddRestrictionsV14XxApplicationProblemPlusJSON
}
