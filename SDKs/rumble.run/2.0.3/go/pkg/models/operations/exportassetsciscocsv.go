package operations

import (
	"openapi/pkg/models/shared"
)

type ExportAssetsCiscoCsvQueryParams struct {
	Search *string `queryParam:"style=form,explode=true,name=search"`
}

type ExportAssetsCiscoCsvSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type ExportAssetsCiscoCsvRequest struct {
	QueryParams ExportAssetsCiscoCsvQueryParams
	Security    ExportAssetsCiscoCsvSecurity
}

type ExportAssetsCiscoCsvResponse struct {
	ContentType                                string
	StatusCode                                 int64
	ExportAssetsCiscoCsv200TextCsvBinaryString []byte
}
