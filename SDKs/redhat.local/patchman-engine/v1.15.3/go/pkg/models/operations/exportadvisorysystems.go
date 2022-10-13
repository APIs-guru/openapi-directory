package operations

import (
	"openapi/pkg/models/shared"
)

type ExportAdvisorySystemsPathParams struct {
	AdvisoryID string `pathParam:"style=simple,explode=false,name=advisory_id"`
}

type ExportAdvisorySystemsQueryParams struct {
	FilterDisplayName            *string  `queryParam:"style=form,explode=true,name=filter[display_name]"`
	FilterID                     *string  `queryParam:"style=form,explode=true,name=filter[id]"`
	FilterLastEvaluation         *string  `queryParam:"style=form,explode=true,name=filter[last_evaluation]"`
	FilterLastUpload             *string  `queryParam:"style=form,explode=true,name=filter[last_upload]"`
	FilterOtherCount             *string  `queryParam:"style=form,explode=true,name=filter[other_count]"`
	FilterPackagesInstalled      *string  `queryParam:"style=form,explode=true,name=filter[packages_installed]"`
	FilterPackagesUpdatable      *string  `queryParam:"style=form,explode=true,name=filter[packages_updatable]"`
	FilterRhbaCount              *string  `queryParam:"style=form,explode=true,name=filter[rhba_count]"`
	FilterRheaCount              *string  `queryParam:"style=form,explode=true,name=filter[rhea_count]"`
	FilterRhsaCount              *string  `queryParam:"style=form,explode=true,name=filter[rhsa_count]"`
	FilterStale                  *string  `queryParam:"style=form,explode=true,name=filter[stale]"`
	FilterSystemProfileSapSidsIn []string `queryParam:"style=form,explode=true,name=filter[system_profile][sap_sids][in]"`
	FilterSystemProfileSapSystem *string  `queryParam:"style=form,explode=true,name=filter[system_profile][sap_system]"`
	Search                       *string  `queryParam:"style=form,explode=true,name=search"`
	Tags                         []string `queryParam:"style=form,explode=true,name=tags"`
}

type ExportAdvisorySystemsSecurity struct {
	RhIdentity shared.SchemeRhIdentity `security:"scheme,type=apiKey,subtype=header"`
}

type ExportAdvisorySystemsRequest struct {
	PathParams  ExportAdvisorySystemsPathParams
	QueryParams ExportAdvisorySystemsQueryParams
	Security    ExportAdvisorySystemsSecurity
}

type ExportAdvisorySystemsResponse struct {
	Body                         []byte
	ContentType                  string
	StatusCode                   int64
	ControllersSystemInlineItems []shared.ControllersSystemInlineItem
}
