package operations

import (
	"openapi/pkg/models/shared"
)

type GetBenefitsDocumentUploadStatusReportSecurity struct {
	Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}

type GetBenefitsDocumentUploadStatusReport200ApplicationJSON struct {
	Data []interface{} `json:"data"`
}

type GetBenefitsDocumentUploadStatusReport401ApplicationJSON struct {
	Message *string `json:"Message,omitempty"`
}

type GetBenefitsDocumentUploadStatusReport403ApplicationJSON struct {
	Message *string `json:"Message,omitempty"`
}

type GetBenefitsDocumentUploadStatusReport422ApplicationJSON struct {
	Errors []interface{} `json:"errors"`
}

type GetBenefitsDocumentUploadStatusReport429ApplicationJSON struct {
	Message *string `json:"Message,omitempty"`
}

type GetBenefitsDocumentUploadStatusReport500ApplicationJSON struct {
	Code   *string `json:"code,omitempty"`
	Detail *string `json:"detail,omitempty"`
	Status *string `json:"status,omitempty"`
	Title  *string `json:"title,omitempty"`
}

type GetBenefitsDocumentUploadStatusReportRequest struct {
	Request  shared.DocumentUploadStatusGUIDList `request:"mediaType=application/json"`
	Security GetBenefitsDocumentUploadStatusReportSecurity
}

type GetBenefitsDocumentUploadStatusReportResponse struct {
	ContentType                                                   string
	StatusCode                                                    int64
	GetBenefitsDocumentUploadStatusReport200ApplicationJSONObject *GetBenefitsDocumentUploadStatusReport200ApplicationJSON
	GetBenefitsDocumentUploadStatusReport401ApplicationJSONObject *GetBenefitsDocumentUploadStatusReport401ApplicationJSON
	GetBenefitsDocumentUploadStatusReport403ApplicationJSONObject *GetBenefitsDocumentUploadStatusReport403ApplicationJSON
	GetBenefitsDocumentUploadStatusReport422ApplicationJSONObject *GetBenefitsDocumentUploadStatusReport422ApplicationJSON
	GetBenefitsDocumentUploadStatusReport429ApplicationJSONObject *GetBenefitsDocumentUploadStatusReport429ApplicationJSON
	GetBenefitsDocumentUploadStatusReport500ApplicationJSONObject *GetBenefitsDocumentUploadStatusReport500ApplicationJSON
}
