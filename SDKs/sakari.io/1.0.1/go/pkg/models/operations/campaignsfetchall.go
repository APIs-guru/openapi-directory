package operations

import (
	"openapi/pkg/models/shared"
)

type CampaignsFetchAllPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type CampaignsFetchAllQueryParams struct {
	Limit  *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name   *string `queryParam:"style=form,explode=true,name=name"`
	Offset *int64  `queryParam:"style=form,explode=true,name=offset"`
}

type CampaignsFetchAllSecurity struct {
	SakariAuth shared.SchemeSakariAuth `security:"scheme,type=oauth2"`
}

type CampaignsFetchAllRequest struct {
	PathParams  CampaignsFetchAllPathParams
	QueryParams CampaignsFetchAllQueryParams
	Security    CampaignsFetchAllSecurity
}

type CampaignsFetchAllResponse struct {
	CampaignsResponse *shared.CampaignsResponse
	ContentType       string
	ErrorResponse     *shared.ErrorResponse
	StatusCode        int64
}
