package operations

import (
	"openapi/pkg/models/shared"
)

type PostBenefitsDocumentUploadSecurity struct {
	Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}

type PostBenefitsDocumentUploadRequest struct {
	Security PostBenefitsDocumentUploadSecurity
}

type PostBenefitsDocumentUpload202ApplicationJSON struct {
	Data interface{} `json:"data"`
}

type PostBenefitsDocumentUpload401ApplicationJSON struct {
	Message *string `json:"Message"`
}

type PostBenefitsDocumentUpload403ApplicationJSON struct {
	Message *string `json:"Message"`
}

type PostBenefitsDocumentUpload422ApplicationJSON struct {
	Errors []interface{} `json:"errors"`
}

type PostBenefitsDocumentUpload429ApplicationJSON struct {
	Message *string `json:"Message"`
}

type PostBenefitsDocumentUpload500ApplicationJSON struct {
	Code   *string `json:"code"`
	Detail *string `json:"detail"`
	Status *string `json:"status"`
	Title  *string `json:"title"`
}

type PostBenefitsDocumentUploadResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	PostBenefitsDocumentUpload202ApplicationJSONObject *PostBenefitsDocumentUpload202ApplicationJSON
	PostBenefitsDocumentUpload401ApplicationJSONObject *PostBenefitsDocumentUpload401ApplicationJSON
	PostBenefitsDocumentUpload403ApplicationJSONObject *PostBenefitsDocumentUpload403ApplicationJSON
	PostBenefitsDocumentUpload422ApplicationJSONObject *PostBenefitsDocumentUpload422ApplicationJSON
	PostBenefitsDocumentUpload429ApplicationJSONObject *PostBenefitsDocumentUpload429ApplicationJSON
	PostBenefitsDocumentUpload500ApplicationJSONObject *PostBenefitsDocumentUpload500ApplicationJSON
}
