package operations

import (
	"openapi/pkg/models/shared"
)

type ExportAssetsNmapXMLQueryParams struct {
	Search *string `queryParam:"style=form,explode=true,name=search"`
}

type ExportAssetsNmapXMLSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type ExportAssetsNmapXMLRequest struct {
	QueryParams ExportAssetsNmapXMLQueryParams
	Security    ExportAssetsNmapXMLSecurity
}

type ExportAssetsNmapXMLResponse struct {
	ContentType                               string
	StatusCode                                int64
	ExportAssetsNmapXML200TextXMLBinaryString []byte
}
