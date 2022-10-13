package operations

import (
	"openapi/pkg/models/shared"
)

type LatestPackagePathParams struct {
	PackageName string `pathParam:"style=simple,explode=false,name=package_name"`
}

type LatestPackageSecurity struct {
	RhIdentity shared.SchemeRhIdentity `security:"scheme,type=apiKey,subtype=header"`
}

type LatestPackageRequest struct {
	PathParams LatestPackagePathParams
	Security   LatestPackageSecurity
}

type LatestPackageResponse struct {
	ContentType                      string
	StatusCode                       int64
	ControllersPackageDetailResponse *shared.ControllersPackageDetailResponse
}
