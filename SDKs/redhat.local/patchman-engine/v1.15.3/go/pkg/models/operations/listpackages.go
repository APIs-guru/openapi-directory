package operations

import (
	"openapi/pkg/models/shared"
)

type ListPackagesSortEnum string

const (
	ListPackagesSortEnumID               ListPackagesSortEnum = "id"
	ListPackagesSortEnumName             ListPackagesSortEnum = "name"
	ListPackagesSortEnumSystemsInstalled ListPackagesSortEnum = "systems_installed"
	ListPackagesSortEnumSystemsUpdatable ListPackagesSortEnum = "systems_updatable"
)

type ListPackagesQueryParams struct {
	FilterName                   *string               `queryParam:"style=form,explode=true,name=filter[name]"`
	FilterSummary                *string               `queryParam:"style=form,explode=true,name=filter[summary]"`
	FilterSystemProfileSapSidsIn []string              `queryParam:"style=form,explode=true,name=filter[system_profile][sap_sids][in]"`
	FilterSystemProfileSapSystem *string               `queryParam:"style=form,explode=true,name=filter[system_profile][sap_system]"`
	FilterSystemsInstalled       *string               `queryParam:"style=form,explode=true,name=filter[systems_installed]"`
	FilterSystemsUpdatable       *string               `queryParam:"style=form,explode=true,name=filter[systems_updatable]"`
	Limit                        *int64                `queryParam:"style=form,explode=true,name=limit"`
	Offset                       *int64                `queryParam:"style=form,explode=true,name=offset"`
	Search                       *string               `queryParam:"style=form,explode=true,name=search"`
	Sort                         *ListPackagesSortEnum `queryParam:"style=form,explode=true,name=sort"`
	Tags                         []string              `queryParam:"style=form,explode=true,name=tags"`
}

type ListPackagesSecurity struct {
	RhIdentity shared.SchemeRhIdentity `security:"scheme,type=apiKey,subtype=header"`
}

type ListPackagesRequest struct {
	QueryParams ListPackagesQueryParams
	Security    ListPackagesSecurity
}

type ListPackagesResponse struct {
	ContentType                 string
	StatusCode                  int64
	ControllersPackagesResponse *shared.ControllersPackagesResponse
}
