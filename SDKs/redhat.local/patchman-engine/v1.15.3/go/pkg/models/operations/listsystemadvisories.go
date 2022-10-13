package operations

import (
	"openapi/pkg/models/shared"
)

type ListSystemAdvisoriesPathParams struct {
	InventoryID string `pathParam:"style=simple,explode=false,name=inventory_id"`
}

type ListSystemAdvisoriesSortEnum string

const (
	ListSystemAdvisoriesSortEnumID         ListSystemAdvisoriesSortEnum = "id"
	ListSystemAdvisoriesSortEnumName       ListSystemAdvisoriesSortEnum = "name"
	ListSystemAdvisoriesSortEnumType       ListSystemAdvisoriesSortEnum = "type"
	ListSystemAdvisoriesSortEnumSynopsis   ListSystemAdvisoriesSortEnum = "synopsis"
	ListSystemAdvisoriesSortEnumPublicDate ListSystemAdvisoriesSortEnum = "public_date"
)

type ListSystemAdvisoriesQueryParams struct {
	FilterAdvisoryType *string                       `queryParam:"style=form,explode=true,name=filter[advisory_type]"`
	FilterDescription  *string                       `queryParam:"style=form,explode=true,name=filter[description]"`
	FilterID           *string                       `queryParam:"style=form,explode=true,name=filter[id]"`
	FilterPublicDate   *string                       `queryParam:"style=form,explode=true,name=filter[public_date]"`
	FilterSeverity     *string                       `queryParam:"style=form,explode=true,name=filter[severity]"`
	FilterSynopsis     *string                       `queryParam:"style=form,explode=true,name=filter[synopsis]"`
	Limit              *int64                        `queryParam:"style=form,explode=true,name=limit"`
	Offset             *int64                        `queryParam:"style=form,explode=true,name=offset"`
	Search             *string                       `queryParam:"style=form,explode=true,name=search"`
	Sort               *ListSystemAdvisoriesSortEnum `queryParam:"style=form,explode=true,name=sort"`
}

type ListSystemAdvisoriesSecurity struct {
	RhIdentity shared.SchemeRhIdentity `security:"scheme,type=apiKey,subtype=header"`
}

type ListSystemAdvisoriesRequest struct {
	PathParams  ListSystemAdvisoriesPathParams
	QueryParams ListSystemAdvisoriesQueryParams
	Security    ListSystemAdvisoriesSecurity
}

type ListSystemAdvisoriesResponse struct {
	ContentType                         string
	StatusCode                          int64
	ControllersSystemAdvisoriesResponse *shared.ControllersSystemAdvisoriesResponse
}
