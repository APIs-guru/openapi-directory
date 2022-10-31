package operations

import (
"openapi/pkg/models/shared")

type FindUserByUsernamePathParams struct {
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type FindUserByUsernameQueryParams struct {
    Expansions []shared.UserExpansionsParameterEnum `queryParam:"style=form,explode=false,name=expansions"`
    MediaFields []shared.MediaFieldsParameterEnum `queryParam:"style=form,explode=false,name=media.fields"`
    PlaceFields []shared.PlaceFieldsParameterEnum `queryParam:"style=form,explode=false,name=place.fields"`
    PollFields []shared.PollFieldsParameterEnum `queryParam:"style=form,explode=false,name=poll.fields"`
    TweetFields []shared.TweetFieldsParameterEnum `queryParam:"style=form,explode=false,name=tweet.fields"`
    UserFields []shared.UserFieldsParameterEnum `queryParam:"style=form,explode=false,name=user.fields"`
    
}

type FindUserByUsernameRequest struct {
    PathParams FindUserByUsernamePathParams 
    QueryParams FindUserByUsernameQueryParams 
    
}

type FindUserByUsernameResponse struct {
    ContentType string 
    Error *interface{} 
    Problem *interface{} 
    SingleUserLookupResponse *shared.SingleUserLookupResponse 
    StatusCode int64 
    
}

