package operations

import (
	"openapi/pkg/models/shared"
)

type GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtPathParams struct {
	Ext           shared.ExtEnum `pathParam:"style=simple,explode=false,name=ext"`
	Heading       float32        `pathParam:"style=simple,explode=false,name=heading"`
	Position      string         `pathParam:"style=simple,explode=false,name=position"`
	Query         string         `pathParam:"style=simple,explode=false,name=query"`
	VersionNumber int64          `pathParam:"style=simple,explode=false,name=versionNumber"`
}

type GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtQueryParams struct {
	ExtendedPostalCodesFor *string `queryParam:"style=form,explode=true,name=extendedPostalCodesFor"`
	IdxSet                 *string `queryParam:"style=form,explode=true,name=idxSet"`
	Language               *string `queryParam:"style=form,explode=true,name=language"`
	Limit                  *int64  `queryParam:"style=form,explode=true,name=limit"`
	Multiplier             *int64  `queryParam:"style=form,explode=true,name=multiplier"`
	RoutingTimeout         *int64  `queryParam:"style=form,explode=true,name=routingTimeout"`
	Typeahead              *bool   `queryParam:"style=form,explode=true,name=typeahead"`
}

type GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtRequest struct {
	PathParams  GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtPathParams
	QueryParams GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtQueryParams
}

type GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtResponse struct {
	ContentType string
	StatusCode  int64
}
