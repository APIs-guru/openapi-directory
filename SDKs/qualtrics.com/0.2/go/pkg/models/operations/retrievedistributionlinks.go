package operations

import (
	"openapi/pkg/models/shared"
)

type RetrievedistributionlinksPathParams struct {
	DistributionID string `pathParam:"style=simple,explode=false,name=DistributionId"`
}

type RetrievedistributionlinksQueryParams struct {
	SurveyID string `queryParam:"style=form,explode=true,name=surveyId"`
}

type RetrievedistributionlinksRequest struct {
	PathParams  RetrievedistributionlinksPathParams
	QueryParams RetrievedistributionlinksQueryParams
}

type RetrievedistributionlinksResponse struct {
	ContentType                       string
	RetrieveDistributionLinksResponse *shared.RetrieveDistributionLinksResponse
	StatusCode                        int64
}
