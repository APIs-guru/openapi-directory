package operations

import (
	"openapi/pkg/models/shared"
)

type ExportWirelessJsonlQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
	Search *string `queryParam:"style=form,explode=true,name=search"`
}

type ExportWirelessJsonlSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type ExportWirelessJsonlRequest struct {
	QueryParams ExportWirelessJsonlQueryParams
	Security    ExportWirelessJsonlSecurity
}

type ExportWirelessJsonlResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	ExportWirelessJsonl200ApplicationJSONBinaryString []byte
}
