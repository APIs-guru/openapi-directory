package operations

type PutBenefitsDocumentUploadHeaders struct {
	ContentMd5 *string `header:"style=simple,explode=false,name=Content-MD5"`
}

type PutBenefitsDocumentUpload401ApplicationJSON struct {
	Message *string `json:"Message,omitempty"`
}

type PutBenefitsDocumentUpload422ApplicationJSON struct {
	Errors []interface{} `json:"errors"`
}

type PutBenefitsDocumentUpload429ApplicationJSON struct {
	Message *string `json:"Message,omitempty"`
}

type PutBenefitsDocumentUpload500ApplicationJSON struct {
	Code   *string `json:"code,omitempty"`
	Detail *string `json:"detail,omitempty"`
	Status *string `json:"status,omitempty"`
	Title  *string `json:"title,omitempty"`
}

type PutBenefitsDocumentUploadRequest struct {
	Headers PutBenefitsDocumentUploadHeaders
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
