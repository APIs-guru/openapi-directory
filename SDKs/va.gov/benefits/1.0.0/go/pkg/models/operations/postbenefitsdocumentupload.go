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
	Message *string `json:"Message,omitempty"`
}

type PostBenefitsDocumentUpload403ApplicationJSON struct {
	Message *string `json:"Message,omitempty"`
}

type PostBenefitsDocumentUpload422ApplicationJSON struct {
	Errors []interface{} `json:"errors"`
}

type PostBenefitsDocumentUpload429ApplicationJSON struct {
	Message *string `json:"Message,omitempty"`
}

type PostBenefitsDocumentUpload500ApplicationJSON struct {
	Code   *string `json:"code,omitempty"`
	Detail *string `json:"detail,omitempty"`
	Status *string `json:"status,omitempty"`
	Title  *string `json:"title,omitempty"`
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
