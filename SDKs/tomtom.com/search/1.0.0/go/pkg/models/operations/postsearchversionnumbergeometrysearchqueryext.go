package operations

import (
	"openapi/pkg/models/shared"
)

type PostSearchVersionNumberGeometrySearchQueryExtPathParams struct {
	Ext           shared.ExtEnum `pathParam:"style=simple,explode=false,name=ext"`
	Query         string         `pathParam:"style=simple,explode=false,name=query"`
	VersionNumber int64          `pathParam:"style=simple,explode=false,name=versionNumber"`
}

type PostSearchVersionNumberGeometrySearchQueryExtQueryParams struct {
	ExtendedPostalCodesFor *string `queryParam:"style=form,explode=true,name=extendedPostalCodesFor"`
	IdxSet                 *string `queryParam:"style=form,explode=true,name=idxSet"`
	Language               *string `queryParam:"style=form,explode=true,name=language"`
	Limit                  *int64  `queryParam:"style=form,explode=true,name=limit"`
}

type PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList struct {
	Position *string  `json:"position"`
	Radius   *int64   `json:"radius"`
	Type     *string  `json:"type"`
	Vertices []string `json:"vertices"`
}

type PostSearchVersionNumberGeometrySearchQueryExtRequestBody struct {
	GeometryList []PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList `json:"geometryList"`
}

type PostSearchVersionNumberGeometrySearchQueryExtRequest struct {
	PathParams  PostSearchVersionNumberGeometrySearchQueryExtPathParams
	QueryParams PostSearchVersionNumberGeometrySearchQueryExtQueryParams
	Request     *PostSearchVersionNumberGeometrySearchQueryExtRequestBody `request:"mediaType=application/json"`
}

type PostSearchVersionNumberGeometrySearchQueryExtResponse struct {
	ContentType string
	StatusCode  int64
}
