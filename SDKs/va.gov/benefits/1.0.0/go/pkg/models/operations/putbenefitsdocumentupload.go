package operations

type PutBenefitsDocumentUploadHeaders struct {
	ContentMd5 *string `header:"name=Content-MD5"`
}

type PutBenefitsDocumentUploadRequest struct {
	Headers PutBenefitsDocumentUploadHeaders
}

type PutBenefitsDocumentUpload401ApplicationJSON struct {
	Message *string `json:"Message"`
}

type PutBenefitsDocumentUpload422ApplicationJSON struct {
	Errors []interface{} `json:"errors"`
}

type PutBenefitsDocumentUpload429ApplicationJSON struct {
	Message *string `json:"Message"`
}

type PutBenefitsDocumentUpload500ApplicationJSON struct {
	Code   *string `json:"code"`
	Detail *string `json:"detail"`
	Status *string `json:"status"`
	Title  *string `json:"title"`
}

type PutBenefitsDocumentUploadResponse struct {
	Body                                              []byte
	ContentType                                       string
	StatusCode                                        int64
	PutBenefitsDocumentUpload401ApplicationJSONObject *PutBenefitsDocumentUpload401ApplicationJSON
	PutBenefitsDocumentUpload422ApplicationJSONObject *PutBenefitsDocumentUpload422ApplicationJSON
	PutBenefitsDocumentUpload429ApplicationJSONObject *PutBenefitsDocumentUpload429ApplicationJSON
	PutBenefitsDocumentUpload500ApplicationJSONObject *PutBenefitsDocumentUpload500ApplicationJSON
}
