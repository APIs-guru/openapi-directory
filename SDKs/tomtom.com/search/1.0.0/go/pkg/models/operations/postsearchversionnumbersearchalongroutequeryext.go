package operations

import (
	"openapi/pkg/models/shared"
)

type PostSearchVersionNumberSearchAlongRouteQueryExtPathParams struct {
	Ext           shared.ExtEnum `pathParam:"style=simple,explode=false,name=ext"`
	Query         string         `pathParam:"style=simple,explode=false,name=query"`
	VersionNumber int64          `pathParam:"style=simple,explode=false,name=versionNumber"`
}

type PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams struct {
	Limit         *int64 `queryParam:"style=form,explode=true,name=limit"`
	MaxDetourTime int64  `queryParam:"style=form,explode=true,name=maxDetourTime"`
}

type PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints struct {
	Lat *float32 `json:"lat,omitempty"`
	Lon *float32 `json:"lon,omitempty"`
}

type PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute struct {
	Points []PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints `json:"points,omitempty"`
}

type PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody struct {
	Route *PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute `json:"route,omitempty"`
}

type PostSearchVersionNumberSearchAlongRouteQueryExtRequest struct {
	PathParams  PostSearchVersionNumberSearchAlongRouteQueryExtPathParams
	QueryParams PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams
	Request     *PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody `request:"mediaType=application/json"`
}

type PostSearchVersionNumberSearchAlongRouteQueryExtResponse struct {
	ContentType string
	StatusCode  int64
}
