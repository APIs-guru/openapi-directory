package operations

import (
	"openapi/pkg/models/shared"
)

type ListSystemsSortEnum string

const (
	ListSystemsSortEnumID                ListSystemsSortEnum = "id"
	ListSystemsSortEnumDisplayName       ListSystemsSortEnum = "display_name"
	ListSystemsSortEnumLastEvaluation    ListSystemsSortEnum = "last_evaluation"
	ListSystemsSortEnumLastUpload        ListSystemsSortEnum = "last_upload"
	ListSystemsSortEnumRhsaCount         ListSystemsSortEnum = "rhsa_count"
	ListSystemsSortEnumRhbaCount         ListSystemsSortEnum = "rhba_count"
	ListSystemsSortEnumRheaCount         ListSystemsSortEnum = "rhea_count"
	ListSystemsSortEnumOtherCount        ListSystemsSortEnum = "other_count"
	ListSystemsSortEnumStale             ListSystemsSortEnum = "stale"
	ListSystemsSortEnumPackagesInstalled ListSystemsSortEnum = "packages_installed"
	ListSystemsSortEnumPackagesUpdatable ListSystemsSortEnum = "packages_updatable"
)

type ListSystemsQueryParams struct {
	FilterCreated                *string              `queryParam:"style=form,explode=true,name=filter[created]"`
	FilterCulledTimestamp        *string              `queryParam:"style=form,explode=true,name=filter[culled_timestamp]"`
	FilterDisplayName            *string              `queryParam:"style=form,explode=true,name=filter[display_name]"`
	FilterID                     *string              `queryParam:"style=form,explode=true,name=filter[id]"`
	FilterInsightsID             *string              `queryParam:"style=form,explode=true,name=filter[insights_id]"`
	FilterLastEvaluation         *string              `queryParam:"style=form,explode=true,name=filter[last_evaluation]"`
	FilterLastUpload             *string              `queryParam:"style=form,explode=true,name=filter[last_upload]"`
	FilterOtherCount             *string              `queryParam:"style=form,explode=true,name=filter[other_count]"`
	FilterPackagesInstalled      *string              `queryParam:"style=form,explode=true,name=filter[packages_installed]"`
	FilterPackagesUpdatable      *string              `queryParam:"style=form,explode=true,name=filter[packages_updatable]"`
	FilterRhbaCount              *string              `queryParam:"style=form,explode=true,name=filter[rhba_count]"`
	FilterRheaCount              *string              `queryParam:"style=form,explode=true,name=filter[rhea_count]"`
	FilterRhsaCount              *string              `queryParam:"style=form,explode=true,name=filter[rhsa_count]"`
	FilterStale                  *string              `queryParam:"style=form,explode=true,name=filter[stale]"`
	FilterStaleTimestamp         *string              `queryParam:"style=form,explode=true,name=filter[stale_timestamp]"`
	FilterStaleWarningTimestamp  *string              `queryParam:"style=form,explode=true,name=filter[stale_warning_timestamp]"`
	FilterSystemProfileSapSidsIn []string             `queryParam:"style=form,explode=true,name=filter[system_profile][sap_sids][in]"`
	FilterSystemProfileSapSystem *string              `queryParam:"style=form,explode=true,name=filter[system_profile][sap_system]"`
	Limit                        *int64               `queryParam:"style=form,explode=true,name=limit"`
	Offset                       *int64               `queryParam:"style=form,explode=true,name=offset"`
	Search                       *string              `queryParam:"style=form,explode=true,name=search"`
	Sort                         *ListSystemsSortEnum `queryParam:"style=form,explode=true,name=sort"`
	Tags                         []string             `queryParam:"style=form,explode=true,name=tags"`
}

type ListSystemsSecurity struct {
	RhIdentity shared.SchemeRhIdentity `security:"scheme,type=apiKey,subtype=header"`
}

type ListSystemsRequest struct {
	QueryParams ListSystemsQueryParams
	Security    ListSystemsSecurity
}

type ListSystemsResponse struct {
	ContentType                string
	StatusCode                 int64
	ControllersSystemsResponse *shared.ControllersSystemsResponse
}
