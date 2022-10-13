package operations

import (
	"openapi/pkg/models/shared"
)

type ExportSystemAdvisoriesPathParams struct {
	InventoryID string `pathParam:"style=simple,explode=false,name=inventory_id"`
}

type ExportSystemAdvisoriesQueryParams struct {
	FilterAdvisoryType *string `queryParam:"style=form,explode=true,name=filter[advisory_type]"`
	FilterDescription  *string `queryParam:"style=form,explode=true,name=filter[description]"`
	FilterID           *string `queryParam:"style=form,explode=true,name=filter[id]"`
	FilterPublicDate   *string `queryParam:"style=form,explode=true,name=filter[public_date]"`
	FilterSeverity     *string `queryParam:"style=form,explode=true,name=filter[severity]"`
	FilterSynopsis     *string `queryParam:"style=form,explode=true,name=filter[synopsis]"`
	Search             *string `queryParam:"style=form,explode=true,name=search"`
}

type ExportSystemAdvisoriesSecurity struct {
	RhIdentity shared.SchemeRhIdentity `security:"scheme,type=apiKey,subtype=header"`
}

type ExportSystemAdvisoriesRequest struct {
	PathParams  ExportSystemAdvisoriesPathParams
	QueryParams ExportSystemAdvisoriesQueryParams
	Security    ExportSystemAdvisoriesSecurity
}

type ExportSystemAdvisoriesResponse struct {
	Body                                 []byte
	ContentType                          string
	StatusCode                           int64
	ControllersSystemAdvisoriesDbLookups []shared.ControllersSystemAdvisoriesDbLookup
}
