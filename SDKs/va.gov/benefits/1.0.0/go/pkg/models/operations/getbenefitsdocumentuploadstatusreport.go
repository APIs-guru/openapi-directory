package operations

import (
	"openapi/pkg/models/shared"
)

type GetBenefitsDocumentUploadStatusReportSecurity struct {
	Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}

type GetBenefitsDocumentUploadStatusReportRequest struct {
	Request  shared.DocumentUploadStatusGUIDList `request:"mediaType=application/json"`
	Security GetBenefitsDocumentUploadStatusReportSecurity
}

type GetBenefitsDocumentUploadStatusReport200ApplicationJSON struct {
	Data []interface{} `json:"data"`
}

type GetBenefitsDocumentUploadStatusReport401ApplicationJSON struct {
	Message *string `json:"Message"`
}

type GetBenefitsDocumentUploadStatusReport403ApplicationJSON struct {
	Message *string `json:"Message"`
}

type GetBenefitsDocumentUploadStatusReport422ApplicationJSON struct {
	Errors []interface{} `json:"errors"`
}

type GetBenefitsDocumentUploadStatusReport429ApplicationJSON struct {
	Message *string `json:"Message"`
}

type GetBenefitsDocumentUploadStatusReport500ApplicationJSON struct {
	Code   *string `json:"code"`
	Detail *string `json:"detail"`
	Status *string `json:"status"`
	Title  *string `json:"title"`
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
