package operations

import (
	"openapi/pkg/models/shared"
)

type GetBenefitsDocumentUploadDownloadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetBenefitsDocumentUploadDownloadSecurity struct {
	Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}

type GetBenefitsDocumentUploadDownloadRequest struct {
	PathParams GetBenefitsDocumentUploadDownloadPathParams
	Security   GetBenefitsDocumentUploadDownloadSecurity
}

type GetBenefitsDocumentUploadDownload401ApplicationJSON struct {
	Message *string `json:"Message"`
}

type GetBenefitsDocumentUploadDownload403ApplicationJSON struct {
	Message *string `json:"Message"`
}

type GetBenefitsDocumentUploadDownload404ApplicationJSON struct {
	Code   *string `json:"code"`
	Detail *string `json:"detail"`
	Status *string `json:"status"`
	Title  *string `json:"title"`
}

type GetBenefitsDocumentUploadDownload429ApplicationJSON struct {
	Message *string `json:"Message"`
}

type GetBenefitsDocumentUploadDownload500ApplicationJSON struct {
	Code   *string `json:"code"`
	Detail *string `json:"detail"`
	Status *string `json:"status"`
	Title  *string `json:"title"`
}

type GetBenefitsDocumentUploadDownloadResponse struct {
	ContentType                                                    string
	StatusCode                                                     int64
	GetBenefitsDocumentUploadDownload200ApplicationZipBinaryString []byte
	GetBenefitsDocumentUploadDownload401ApplicationJSONObject      *GetBenefitsDocumentUploadDownload401ApplicationJSON
	GetBenefitsDocumentUploadDownload403ApplicationJSONObject      *GetBenefitsDocumentUploadDownload403ApplicationJSON
	GetBenefitsDocumentUploadDownload404ApplicationJSONObject      *GetBenefitsDocumentUploadDownload404ApplicationJSON
	GetBenefitsDocumentUploadDownload429ApplicationJSONObject      *GetBenefitsDocumentUploadDownload429ApplicationJSON
	GetBenefitsDocumentUploadDownload500ApplicationJSONObject      *GetBenefitsDocumentUploadDownload500ApplicationJSON
}
