package operations

import (
	"openapi/pkg/models/shared"
)

type ExportServicesCsvQueryParams struct {
	Search *string `queryParam:"style=form,explode=true,name=search"`
}

type ExportServicesCsvSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type ExportServicesCsvRequest struct {
	QueryParams ExportServicesCsvQueryParams
	Security    ExportServicesCsvSecurity
}

type ExportServicesCsvResponse struct {
	ContentType                             string
	StatusCode                              int64
	ExportServicesCsv200TextCsvBinaryString []byte
}
