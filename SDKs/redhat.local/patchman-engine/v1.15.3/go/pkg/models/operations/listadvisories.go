package operations

import (
	"openapi/pkg/models/shared"
)

type ListAdvisoriesSortEnum string

const (
	ListAdvisoriesSortEnumID                ListAdvisoriesSortEnum = "id"
	ListAdvisoriesSortEnumName              ListAdvisoriesSortEnum = "name"
	ListAdvisoriesSortEnumAdvisoryType      ListAdvisoriesSortEnum = "advisory_type"
	ListAdvisoriesSortEnumSynopsis          ListAdvisoriesSortEnum = "synopsis"
	ListAdvisoriesSortEnumPublicDate        ListAdvisoriesSortEnum = "public_date"
	ListAdvisoriesSortEnumApplicableSystems ListAdvisoriesSortEnum = "applicable_systems"
)

type ListAdvisoriesQueryParams struct {
	FilterAdvisoryType           *string                 `queryParam:"style=form,explode=true,name=filter[advisory_type]"`
	FilterApplicableSystems      *string                 `queryParam:"style=form,explode=true,name=filter[applicable_systems]"`
	FilterDescription            *string                 `queryParam:"style=form,explode=true,name=filter[description]"`
	FilterID                     *string                 `queryParam:"style=form,explode=true,name=filter[id]"`
	FilterPublicDate             *string                 `queryParam:"style=form,explode=true,name=filter[public_date]"`
	FilterSeverity               *string                 `queryParam:"style=form,explode=true,name=filter[severity]"`
	FilterSynopsis               *string                 `queryParam:"style=form,explode=true,name=filter[synopsis]"`
	FilterSystemProfileSapSidsIn []string                `queryParam:"style=form,explode=true,name=filter[system_profile][sap_sids][in]"`
	FilterSystemProfileSapSystem *string                 `queryParam:"style=form,explode=true,name=filter[system_profile][sap_system]"`
	Limit                        *int64                  `queryParam:"style=form,explode=true,name=limit"`
	Offset                       *int64                  `queryParam:"style=form,explode=true,name=offset"`
	Search                       *string                 `queryParam:"style=form,explode=true,name=search"`
	Sort                         *ListAdvisoriesSortEnum `queryParam:"style=form,explode=true,name=sort"`
	Tags                         []string                `queryParam:"style=form,explode=true,name=tags"`
}

type ListAdvisoriesSecurity struct {
	RhIdentity shared.SchemeRhIdentity `security:"scheme,type=apiKey,subtype=header"`
}

type ListAdvisoriesRequest struct {
	QueryParams ListAdvisoriesQueryParams
	Security    ListAdvisoriesSecurity
}

type ListAdvisoriesResponse struct {
	ContentType                   string
	StatusCode                    int64
	ControllersAdvisoriesResponse *shared.ControllersAdvisoriesResponse
}
