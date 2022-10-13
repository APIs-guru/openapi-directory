package operations

import (
	"openapi/pkg/models/shared"
)

type PackageVersionsPathParams struct {
	PackageName string `pathParam:"style=simple,explode=false,name=package_name"`
}

type PackageVersionsQueryParams struct {
	Limit  *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
}

type PackageVersionsSecurity struct {
	RhIdentity shared.SchemeRhIdentity `security:"scheme,type=apiKey,subtype=header"`
}

type PackageVersionsRequest struct {
	PathParams  PackageVersionsPathParams
	QueryParams PackageVersionsQueryParams
	Security    PackageVersionsSecurity
}

type PackageVersionsResponse struct {
	ContentType                        string
	StatusCode                         int64
	ControllersPackageVersionsResponse *shared.ControllersPackageVersionsResponse
}
