package operations

import (
	"openapi/pkg/models/shared"
)

type GetSearchVersionNumberRoutedFilterPositionHeadingExtPathParams struct {
	Ext           shared.ExtEnum `pathParam:"style=simple,explode=false,name=ext"`
	Heading       float32        `pathParam:"style=simple,explode=false,name=heading"`
	Position      string         `pathParam:"style=simple,explode=false,name=position"`
	VersionNumber int64          `pathParam:"style=simple,explode=false,name=versionNumber"`
}

type GetSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams struct {
	PoiList        string `queryParam:"style=form,explode=true,name=poiList"`
	RoutingTimeout *int64 `queryParam:"style=form,explode=true,name=routingTimeout"`
}

type GetSearchVersionNumberRoutedFilterPositionHeadingExtRequest struct {
	PathParams  GetSearchVersionNumberRoutedFilterPositionHeadingExtPathParams
	QueryParams GetSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams
}

type GetSearchVersionNumberRoutedFilterPositionHeadingExtResponse struct {
	ContentType string
	StatusCode  int64
}
