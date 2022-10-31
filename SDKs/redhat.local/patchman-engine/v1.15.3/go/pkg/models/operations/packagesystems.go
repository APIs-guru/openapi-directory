package operations

import (
	"openapi/pkg/models/shared"
)

type PackageSystemsPathParams struct {
	PackageName string `pathParam:"style=simple,explode=false,name=package_name"`
}

type PackageSystemsQueryParams struct {
	FilterSystemProfileSapSidsIn []string `queryParam:"style=form,explode=true,name=filter[system_profile][sap_sids][in]"`
	FilterSystemProfileSapSystem *string  `queryParam:"style=form,explode=true,name=filter[system_profile][sap_system]"`
	Limit                        *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset                       *int64   `queryParam:"style=form,explode=true,name=offset"`
	Tags                         []string `queryParam:"style=form,explode=true,name=tags"`
}

type PackageSystemsSecurity struct {
	RhIdentity shared.SchemeRhIdentity `security:"scheme,type=apiKey,subtype=header"`
}

type PackageSystemsRequest struct {
	PathParams  PackageSystemsPathParams
	QueryParams PackageSystemsQueryParams
	Security    PackageSystemsSecurity
}

type PackageSystemsResponse struct {
	ContentType                       string
	StatusCode                        int64
	ControllersPackageSystemsResponse *shared.ControllersPackageSystemsResponse
}
