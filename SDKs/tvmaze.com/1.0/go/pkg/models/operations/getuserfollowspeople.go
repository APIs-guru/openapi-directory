package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserFollowsPeopleEmbedEnum string

const (
	GetUserFollowsPeopleEmbedEnumPerson GetUserFollowsPeopleEmbedEnum = "person"
)

type GetUserFollowsPeopleQueryParams struct {
	Embed *GetUserFollowsPeopleEmbedEnum `queryParam:"style=form,explode=true,name=embed"`
}

type GetUserFollowsPeopleRequest struct {
	QueryParams GetUserFollowsPeopleQueryParams
}

type GetUserFollowsPeopleResponse struct {
	ContentType   string
	PersonFollows []shared.PersonFollow
	StatusCode    int64
}
