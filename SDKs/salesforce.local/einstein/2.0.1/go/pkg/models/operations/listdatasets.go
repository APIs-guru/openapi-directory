package operations

import (
	"openapi/pkg/models/shared"
)

type ListDatasetsQueryParams struct {
	Count  *string `queryParam:"style=form,explode=true,name=count"`
	Global *bool   `queryParam:"style=form,explode=true,name=global"`
	Offset *string `queryParam:"style=form,explode=true,name=offset"`
}

type ListDatasetsSecurity struct {
	BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
}

type ListDatasetsRequest struct {
	QueryParams ListDatasetsQueryParams
	Security    ListDatasetsSecurity
}

type ListDatasetsResponse struct {
	ContentType string
	DatasetList *shared.DatasetList
	StatusCode  int64
}
