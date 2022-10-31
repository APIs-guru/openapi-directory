package operations

import (
	"openapi/pkg/models/shared"
)

type ExportSitesJsonlQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
	Search *string `queryParam:"style=form,explode=true,name=search"`
}

type ExportSitesJsonlSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type ExportSitesJsonlRequest struct {
	QueryParams ExportSitesJsonlQueryParams
	Security    ExportSitesJsonlSecurity
}

type ExportSitesJsonlResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	ExportSitesJsonl200ApplicationJSONBinaryString []byte
}
