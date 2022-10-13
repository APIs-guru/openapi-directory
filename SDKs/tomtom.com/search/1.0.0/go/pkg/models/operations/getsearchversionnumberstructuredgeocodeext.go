package operations

import (
	"openapi/pkg/models/shared"
)

type GetSearchVersionNumberStructuredGeocodeExtPathParams struct {
	Ext           shared.ExtEnum `pathParam:"style=simple,explode=false,name=ext"`
	VersionNumber int64          `pathParam:"style=simple,explode=false,name=versionNumber"`
}

type GetSearchVersionNumberStructuredGeocodeExtQueryParams struct {
	CountryCode                 string  `queryParam:"style=form,explode=true,name=countryCode"`
	CountrySecondarySubdivision *string `queryParam:"style=form,explode=true,name=countrySecondarySubdivision"`
	CountrySubdivision          *string `queryParam:"style=form,explode=true,name=countrySubdivision"`
	CountryTertiarySubdivision  *string `queryParam:"style=form,explode=true,name=countryTertiarySubdivision"`
	CrossStreet                 *string `queryParam:"style=form,explode=true,name=crossStreet"`
	ExtendedPostalCodesFor      *string `queryParam:"style=form,explode=true,name=extendedPostalCodesFor"`
	Language                    *string `queryParam:"style=form,explode=true,name=language"`
	Limit                       *int64  `queryParam:"style=form,explode=true,name=limit"`
	Municipality                *string `queryParam:"style=form,explode=true,name=municipality"`
	MunicipalitySubdivision     *string `queryParam:"style=form,explode=true,name=municipalitySubdivision"`
	Ofs                         *int64  `queryParam:"style=form,explode=true,name=ofs"`
	PostalCode                  *string `queryParam:"style=form,explode=true,name=postalCode"`
	StreetName                  *string `queryParam:"style=form,explode=true,name=streetName"`
	StreetNumber                *string `queryParam:"style=form,explode=true,name=streetNumber"`
}

type GetSearchVersionNumberStructuredGeocodeExtRequest struct {
	PathParams  GetSearchVersionNumberStructuredGeocodeExtPathParams
	QueryParams GetSearchVersionNumberStructuredGeocodeExtQueryParams
}

type GetSearchVersionNumberStructuredGeocodeExtResponse struct {
	ContentType string
	StatusCode  int64
}
