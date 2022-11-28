package operations

import (
	"openapi/pkg/models/shared"
)

type PutReportPkPathParams struct {
	Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type PutReportPkSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type PutReportPk200ApplicationJSON struct {
	ID     *float64                         `json:"id,omitempty"`
	Result *shared.ReportScheduleRestAPIPut `json:"result,omitempty"`
}

type PutReportPk400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PutReportPk401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PutReportPk403ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PutReportPk404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PutReportPk500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PutReportPkRequest struct {
	PathParams PutReportPkPathParams
	Request    shared.ReportScheduleRestAPIPut `request:"mediaType=application/json"`
	Security   PutReportPkSecurity
}

type PutReportPkResponse struct {
	ContentType                         string
	PutReportPk200ApplicationJSONObject *PutReportPk200ApplicationJSON
	PutReportPk400ApplicationJSONObject *PutReportPk400ApplicationJSON
	PutReportPk401ApplicationJSONObject *PutReportPk401ApplicationJSON
	PutReportPk403ApplicationJSONObject *PutReportPk403ApplicationJSON
	PutReportPk404ApplicationJSONObject *PutReportPk404ApplicationJSON
	PutReportPk500ApplicationJSONObject *PutReportPk500ApplicationJSON
	StatusCode                          int64
}
