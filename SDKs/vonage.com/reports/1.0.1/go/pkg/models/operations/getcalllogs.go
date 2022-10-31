package operations

import (
	"openapi/pkg/models/shared"
)

type GetCallLogsPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=account_id"`
}

type GetCallLogsDirectionEnum string

const (
	GetCallLogsDirectionEnumInbound  GetCallLogsDirectionEnum = "Inbound"
	GetCallLogsDirectionEnumOutbound GetCallLogsDirectionEnum = "Outbound"
)

type GetCallLogsQueryParams struct {
	DestinationUser *string                   `queryParam:"style=form,explode=true,name=destination_user"`
	Direction       *GetCallLogsDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	EndGte          *string                   `queryParam:"style=form,explode=true,name=end:gte"`
	EndLte          *string                   `queryParam:"style=form,explode=true,name=end:lte"`
	From            *string                   `queryParam:"style=form,explode=true,name=from"`
	Page            float64                   `queryParam:"style=form,explode=true,name=page"`
	PageSize        float64                   `queryParam:"style=form,explode=true,name=page_size"`
	SourceUser      *string                   `queryParam:"style=form,explode=true,name=source_user"`
	StartGte        string                    `queryParam:"style=form,explode=true,name=start:gte"`
	StartLte        string                    `queryParam:"style=form,explode=true,name=start:lte"`
	To              *string                   `queryParam:"style=form,explode=true,name=to"`
}

type GetCallLogsSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetCallLogsRequest struct {
	PathParams  GetCallLogsPathParams
	QueryParams GetCallLogsQueryParams
	Security    GetCallLogsSecurity
}

type GetCallLogsResponse struct {
	CallLogsHalResponse      *shared.CallLogsHalResponse
	ContentType              string
	StatusCode               int64
	ValidationErrorsResponse *shared.ValidationErrorsResponse
}
