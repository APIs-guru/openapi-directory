package operations

import (
	"openapi/pkg/models/shared"
)

type FindTweetsByIDQueryParams struct {
	Expansions  []shared.TweetExpansionsParameterEnum `queryParam:"style=form,explode=false,name=expansions"`
	Ids         []string                              `queryParam:"style=form,explode=false,name=ids"`
	MediaFields []shared.MediaFieldsParameterEnum     `queryParam:"style=form,explode=false,name=media.fields"`
	PlaceFields []shared.PlaceFieldsParameterEnum     `queryParam:"style=form,explode=false,name=place.fields"`
	PollFields  []shared.PollFieldsParameterEnum      `queryParam:"style=form,explode=false,name=poll.fields"`
	TweetFields []shared.TweetFieldsParameterEnum     `queryParam:"style=form,explode=false,name=tweet.fields"`
	UserFields  []shared.UserFieldsParameterEnum      `queryParam:"style=form,explode=false,name=user.fields"`
}

type FindTweetsByIDRequest struct {
	QueryParams FindTweetsByIDQueryParams
}

type FindTweetsByIDResponse struct {
	ContentType         string
	Error               *interface{}
	Problem             *interface{}
	StatusCode          int64
	TweetLookupResponse *shared.TweetLookupResponse
}
