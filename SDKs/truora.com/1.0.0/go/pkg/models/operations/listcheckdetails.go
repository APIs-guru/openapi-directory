package operations

import (
	"openapi/pkg/models/shared"
)

type ListCheckDetailsPathParams struct {
	CheckID string `pathParam:"style=simple,explode=false,name=check_id"`
}

type ListCheckDetailsQueryParams struct {
	Lang     *string `queryParam:"style=form,explode=true,name=lang"`
	StartKey *string `queryParam:"style=form,explode=true,name=start_key"`
}

type ListCheckDetailsSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ListCheckDetailsRequest struct {
	PathParams  ListCheckDetailsPathParams
	QueryParams ListCheckDetailsQueryParams
	Security    ListCheckDetailsSecurity
}

type ListCheckDetailsResponse struct {
	CheckDetailsOutput *shared.CheckDetailsOutput
	ContentType        string
	StatusCode         int64
}
