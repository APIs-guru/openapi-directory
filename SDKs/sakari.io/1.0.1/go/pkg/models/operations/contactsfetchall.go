package operations

import (
	"openapi/pkg/models/shared"
)

type ContactsFetchAllPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type ContactsFetchAllQueryParams struct {
	Email     *string `queryParam:"style=form,explode=true,name=email"`
	FirstName *string `queryParam:"style=form,explode=true,name=firstName"`
	LastName  *string `queryParam:"style=form,explode=true,name=lastName"`
	Limit     *int64  `queryParam:"style=form,explode=true,name=limit"`
	Mobile    *string `queryParam:"style=form,explode=true,name=mobile"`
	Offset    *int64  `queryParam:"style=form,explode=true,name=offset"`
	Tags      *string `queryParam:"style=form,explode=true,name=tags"`
}

type ContactsFetchAllSecurity struct {
	SakariAuth shared.SchemeSakariAuth `security:"scheme,type=oauth2"`
}

type ContactsFetchAllRequest struct {
	PathParams  ContactsFetchAllPathParams
	QueryParams ContactsFetchAllQueryParams
	Security    ContactsFetchAllSecurity
}

type ContactsFetchAllResponse struct {
	ContactsResponse *shared.ContactsResponse
	ContentType      string
	ErrorResponse    *shared.ErrorResponse
	StatusCode       int64
}
