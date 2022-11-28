package operations

import (
	"openapi/pkg/models/shared"
)

type GetBenefitsDocumentUploadStatusPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetBenefitsDocumentUploadStatusSecurity struct {
	Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}

type GetBenefitsDocumentUploadStatus401ApplicationJSON struct {
	Message *string `json:"Message,omitempty"`
}

type GetBenefitsDocumentUploadStatus403ApplicationJSON struct {
	Message *string `json:"Message,omitempty"`
}

type GetBenefitsDocumentUploadStatus404ApplicationJSON struct {
	Code   *string `json:"code,omitempty"`
	Detail *string `json:"detail,omitempty"`
	Status *string `json:"status,omitempty"`
	Title  *string `json:"title,omitempty"`
}

type GetBenefitsDocumentUploadStatus429ApplicationJSON struct {
	Message *string `json:"Message,omitempty"`
}

type GetBenefitsDocumentUploadStatus500ApplicationJSON struct {
	Code   *string `json:"code,omitempty"`
	Detail *string `json:"detail,omitempty"`
	Status *string `json:"status,omitempty"`
	Title  *string `json:"title,omitempty"`
}

type GetBenefitsDocumentUploadStatusRequest struct {
	PathParams GetBenefitsDocumentUploadStatusPathParams
	Security   GetBenefitsDocumentUploadStatusSecurity
}

type GetBenefitsDocumentUploadStatusResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	GetBenefitsDocumentUploadStatus200ApplicationJSONAny    *interface{}
	GetBenefitsDocumentUploadStatus401ApplicationJSONObject *GetBenefitsDocumentUploadStatus401ApplicationJSON
	GetBenefitsDocumentUploadStatus403ApplicationJSONObject *GetBenefitsDocumentUploadStatus403ApplicationJSON
	GetBenefitsDocumentUploadStatus404ApplicationJSONObject *GetBenefitsDocumentUploadStatus404ApplicationJSON
	GetBenefitsDocumentUploadStatus429ApplicationJSONObject *GetBenefitsDocumentUploadStatus429ApplicationJSON
	GetBenefitsDocumentUploadStatus500ApplicationJSONObject *GetBenefitsDocumentUploadStatus500ApplicationJSON
}
