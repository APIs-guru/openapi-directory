package operations

import (
	"openapi/pkg/models/shared"
)

type ListAdvisorySystemsPathParams struct {
	AdvisoryID string `pathParam:"style=simple,explode=false,name=advisory_id"`
}

type ListAdvisorySystemsSortEnum string

const (
	ListAdvisorySystemsSortEnumID             ListAdvisorySystemsSortEnum = "id"
	ListAdvisorySystemsSortEnumDisplayName    ListAdvisorySystemsSortEnum = "display_name"
	ListAdvisorySystemsSortEnumLastEvaluation ListAdvisorySystemsSortEnum = "last_evaluation"
	ListAdvisorySystemsSortEnumLastUpload     ListAdvisorySystemsSortEnum = "last_upload"
	ListAdvisorySystemsSortEnumRhsaCount      ListAdvisorySystemsSortEnum = "rhsa_count"
	ListAdvisorySystemsSortEnumRhbaCount      ListAdvisorySystemsSortEnum = "rhba_count"
	ListAdvisorySystemsSortEnumRheaCount      ListAdvisorySystemsSortEnum = "rhea_count"
	ListAdvisorySystemsSortEnumOtherCount     ListAdvisorySystemsSortEnum = "other_count"
	ListAdvisorySystemsSortEnumStale          ListAdvisorySystemsSortEnum = "stale"
)

type ListAdvisorySystemsQueryParams struct {
	FilterCreated                *string                      `queryParam:"style=form,explode=true,name=filter[created]"`
	FilterCulledTimestamp        *string                      `queryParam:"style=form,explode=true,name=filter[culled_timestamp]"`
	FilterDisplayName            *string                      `queryParam:"style=form,explode=true,name=filter[display_name]"`
	FilterID                     *string                      `queryParam:"style=form,explode=true,name=filter[id]"`
	FilterInsightsID             *string                      `queryParam:"style=form,explode=true,name=filter[insights_id]"`
	FilterLastEvaluation         *string                      `queryParam:"style=form,explode=true,name=filter[last_evaluation]"`
	FilterLastUpload             *string                      `queryParam:"style=form,explode=true,name=filter[last_upload]"`
	FilterOtherCount             *string                      `queryParam:"style=form,explode=true,name=filter[other_count]"`
	FilterRhbaCount              *string                      `queryParam:"style=form,explode=true,name=filter[rhba_count]"`
	FilterRheaCount              *string                      `queryParam:"style=form,explode=true,name=filter[rhea_count]"`
	FilterRhsaCount              *string                      `queryParam:"style=form,explode=true,name=filter[rhsa_count]"`
	FilterStale                  *string                      `queryParam:"style=form,explode=true,name=filter[stale]"`
	FilterStaleTimestamp         *string                      `queryParam:"style=form,explode=true,name=filter[stale_timestamp]"`
	FilterStaleWarningTimestamp  *string                      `queryParam:"style=form,explode=true,name=filter[stale_warning_timestamp]"`
	FilterSystemProfileSapSidsIn []string                     `queryParam:"style=form,explode=true,name=filter[system_profile][sap_sids][in]"`
	FilterSystemProfileSapSystem *string                      `queryParam:"style=form,explode=true,name=filter[system_profile][sap_system]"`
	Limit                        *int64                       `queryParam:"style=form,explode=true,name=limit"`
	Offset                       *int64                       `queryParam:"style=form,explode=true,name=offset"`
	Search                       *string                      `queryParam:"style=form,explode=true,name=search"`
	Sort                         *ListAdvisorySystemsSortEnum `queryParam:"style=form,explode=true,name=sort"`
	Tags                         []string                     `queryParam:"style=form,explode=true,name=tags"`
}

type ListAdvisorySystemsSecurity struct {
	RhIdentity shared.SchemeRhIdentity `security:"scheme,type=apiKey,subtype=header"`
}

type ListAdvisorySystemsRequest struct {
	PathParams  ListAdvisorySystemsPathParams
	QueryParams ListAdvisorySystemsQueryParams
	Security    ListAdvisorySystemsSecurity
}

type ListAdvisorySystemsResponse struct {
	ContentType                        string
	StatusCode                         int64
	ControllersAdvisorySystemsResponse *shared.ControllersAdvisorySystemsResponse
}
