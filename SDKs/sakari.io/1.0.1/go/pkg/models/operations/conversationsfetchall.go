package operations

import (
	"openapi/pkg/models/shared"
)

type ConversationsFetchAllPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type ConversationsFetchAllQueryParams struct {
	Limit  *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
}

type ConversationsFetchAllSecurity struct {
	SakariAuth shared.SchemeSakariAuth `security:"scheme,type=oauth2"`
}

type ConversationsFetchAllRequest struct {
	PathParams  ConversationsFetchAllPathParams
	QueryParams ConversationsFetchAllQueryParams
	Security    ConversationsFetchAllSecurity
}

type ConversationsFetchAllResponse struct {
	ContentType           string
	ConversationsResponse *shared.ConversationsResponse
	ErrorResponse         *shared.ErrorResponse
	StatusCode            int64
}
