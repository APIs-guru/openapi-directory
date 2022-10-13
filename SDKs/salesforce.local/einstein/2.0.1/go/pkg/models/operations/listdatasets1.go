package operations

import (
	"openapi/pkg/models/shared"
)

type ListDatasets1QueryParams struct {
	Count  *string `queryParam:"style=form,explode=true,name=count"`
	Global *bool   `queryParam:"style=form,explode=true,name=global"`
	Offset *string `queryParam:"style=form,explode=true,name=offset"`
}

type ListDatasets1Security struct {
	BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
}

type ListDatasets1Request struct {
	QueryParams ListDatasets1QueryParams
	Security    ListDatasets1Security
}

type ListDatasets1Response struct {
	ContentType string
	DatasetList *shared.DatasetList
	StatusCode  int64
}
