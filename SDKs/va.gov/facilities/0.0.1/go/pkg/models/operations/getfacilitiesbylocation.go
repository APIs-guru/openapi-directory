package operations

import (
	"openapi/pkg/models/shared"
)

type GetFacilitiesByLocationTypeEnum string

const (
	GetFacilitiesByLocationTypeEnumHealth    GetFacilitiesByLocationTypeEnum = "health"
	GetFacilitiesByLocationTypeEnumCemetery  GetFacilitiesByLocationTypeEnum = "cemetery"
	GetFacilitiesByLocationTypeEnumBenefits  GetFacilitiesByLocationTypeEnum = "benefits"
	GetFacilitiesByLocationTypeEnumVetCenter GetFacilitiesByLocationTypeEnum = "vet_center"
)

type GetFacilitiesByLocationQueryParams struct {
	Bbox     []float32                        `queryParam:"style=form,explode=true,name=bbox[]"`
	Ids      []string                         `queryParam:"style=form,explode=true,name=ids"`
	Lat      *float32                         `queryParam:"style=form,explode=true,name=lat"`
	Long     *float32                         `queryParam:"style=form,explode=true,name=long"`
	Mobile   *bool                            `queryParam:"style=form,explode=true,name=mobile"`
	Page     *int64                           `queryParam:"style=form,explode=true,name=page"`
	PerPage  *int64                           `queryParam:"style=form,explode=true,name=per_page"`
	Services []string                         `queryParam:"style=form,explode=true,name=services[]"`
	State    *string                          `queryParam:"style=form,explode=true,name=state"`
	Type     *GetFacilitiesByLocationTypeEnum `queryParam:"style=form,explode=true,name=type"`
	Visn     *float64                         `queryParam:"style=form,explode=true,name=visn"`
	Zip      *string                          `queryParam:"style=form,explode=true,name=zip"`
}

type GetFacilitiesByLocationSecurity struct {
	Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}

type GetFacilitiesByLocationRequest struct {
	QueryParams GetFacilitiesByLocationQueryParams
	Security    GetFacilitiesByLocationSecurity
}

type GetFacilitiesByLocationResponse struct {
	APIError              *shared.APIError
	ContentType           string
	FacilitiesResponse    *shared.FacilitiesResponse
	GenericError          *shared.GenericError
	GeoFacilitiesResponse *shared.GeoFacilitiesResponse
	StatusCode            int64
}
