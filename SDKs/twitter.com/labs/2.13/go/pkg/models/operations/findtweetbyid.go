package operations

import (
	"openapi/pkg/models/shared"
)

type FindTweetByIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type FindTweetByIDQueryParams struct {
	Expansions  []shared.TweetExpansionsParameterEnum `queryParam:"style=form,explode=false,name=expansions"`
	MediaFields []shared.MediaFieldsParameterEnum     `queryParam:"style=form,explode=false,name=media.fields"`
	PlaceFields []shared.PlaceFieldsParameterEnum     `queryParam:"style=form,explode=false,name=place.fields"`
	PollFields  []shared.PollFieldsParameterEnum      `queryParam:"style=form,explode=false,name=poll.fields"`
	TweetFields []shared.TweetFieldsParameterEnum     `queryParam:"style=form,explode=false,name=tweet.fields"`
	UserFields  []shared.UserFieldsParameterEnum      `queryParam:"style=form,explode=false,name=user.fields"`
}

type FindTweetByIDRequest struct {
	PathParams  FindTweetByIDPathParams
	QueryParams FindTweetByIDQueryParams
}

type FindTweetByIDResponse struct {
	ContentType               string
	Error                     *interface{}
	Problem                   *interface{}
	SingleTweetLookupResponse *shared.SingleTweetLookupResponse
	StatusCode                int64
}
