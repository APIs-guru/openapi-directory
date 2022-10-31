package operations

import (
	"openapi/pkg/models/shared"
)

type GetSearchVersionNumberGeometryFilterExtPathParams struct {
	Ext           shared.ExtEnum `pathParam:"style=simple,explode=false,name=ext"`
	VersionNumber int64          `pathParam:"style=simple,explode=false,name=versionNumber"`
}

type GetSearchVersionNumberGeometryFilterExtQueryParams struct {
	GeometryList string `queryParam:"style=form,explode=true,name=geometryList"`
	PoiList      string `queryParam:"style=form,explode=true,name=poiList"`
}

type GetSearchVersionNumberGeometryFilterExtRequest struct {
	PathParams  GetSearchVersionNumberGeometryFilterExtPathParams
	QueryParams GetSearchVersionNumberGeometryFilterExtQueryParams
}

type GetSearchVersionNumberGeometryFilterExtResponse struct {
	ContentType string
	StatusCode  int64
}
