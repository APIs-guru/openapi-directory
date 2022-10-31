package operations

import (
	"openapi/pkg/models/shared"
)

type GetSearchVersionNumberGeocodeQueryExtPathParams struct {
	Ext           shared.ExtEnum `pathParam:"style=simple,explode=false,name=ext"`
	Query         string         `pathParam:"style=simple,explode=false,name=query"`
	VersionNumber int64          `pathParam:"style=simple,explode=false,name=versionNumber"`
}

type GetSearchVersionNumberGeocodeQueryExtQueryParams struct {
	BtmRight               *string          `queryParam:"style=form,explode=true,name=btmRight"`
	CountrySet             *string          `queryParam:"style=form,explode=true,name=countrySet"`
	ExtendedPostalCodesFor *string          `queryParam:"style=form,explode=true,name=extendedPostalCodesFor"`
	Language               *string          `queryParam:"style=form,explode=true,name=language"`
	Lat                    *float32         `queryParam:"style=form,explode=true,name=lat"`
	Limit                  *int64           `queryParam:"style=form,explode=true,name=limit"`
	Lon                    *float32         `queryParam:"style=form,explode=true,name=lon"`
	Ofs                    *int64           `queryParam:"style=form,explode=true,name=ofs"`
	Radius                 *int64           `queryParam:"style=form,explode=true,name=radius"`
	StoreResult            *bool            `queryParam:"style=form,explode=true,name=storeResult"`
	TopLeft                *string          `queryParam:"style=form,explode=true,name=topLeft"`
	Typeahead              *bool            `queryParam:"style=form,explode=true,name=typeahead"`
	View                   *shared.ViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type GetSearchVersionNumberGeocodeQueryExtRequest struct {
	PathParams  GetSearchVersionNumberGeocodeQueryExtPathParams
	QueryParams GetSearchVersionNumberGeocodeQueryExtQueryParams
}

type GetSearchVersionNumberGeocodeQueryExtResponse struct {
	ContentType string
	StatusCode  int64
}
