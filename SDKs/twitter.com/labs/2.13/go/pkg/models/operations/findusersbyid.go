package operations

import (
	"openapi/pkg/models/shared"
)

type FindUsersByIDQueryParams struct {
	Expansions  []shared.UserExpansionsParameterEnum `queryParam:"style=form,explode=false,name=expansions"`
	Ids         []string                             `queryParam:"style=form,explode=false,name=ids"`
	MediaFields []shared.MediaFieldsParameterEnum    `queryParam:"style=form,explode=false,name=media.fields"`
	PlaceFields []shared.PlaceFieldsParameterEnum    `queryParam:"style=form,explode=false,name=place.fields"`
	PollFields  []shared.PollFieldsParameterEnum     `queryParam:"style=form,explode=false,name=poll.fields"`
	TweetFields []shared.TweetFieldsParameterEnum    `queryParam:"style=form,explode=false,name=tweet.fields"`
	UserFields  []shared.UserFieldsParameterEnum     `queryParam:"style=form,explode=false,name=user.fields"`
}

type FindUsersByIDRequest struct {
	QueryParams FindUsersByIDQueryParams
}

type FindUsersByIDResponse struct {
	ContentType        string
	Error              *interface{}
	Problem            *interface{}
	StatusCode         int64
	UserLookupResponse *shared.UserLookupResponse
}
