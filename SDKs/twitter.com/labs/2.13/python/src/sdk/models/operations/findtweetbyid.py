from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class FindTweetByIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class FindTweetByIDQueryParams:
    expansions: Optional[List[shared.TweetExpansionsParameterEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'expansions', 'style': 'form', 'explode': False }})
    media_fields: Optional[List[shared.MediaFieldsParameterEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'media.fields', 'style': 'form', 'explode': False }})
    place_fields: Optional[List[shared.PlaceFieldsParameterEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'place.fields', 'style': 'form', 'explode': False }})
    poll_fields: Optional[List[shared.PollFieldsParameterEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'poll.fields', 'style': 'form', 'explode': False }})
    tweet_fields: Optional[List[shared.TweetFieldsParameterEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'tweet.fields', 'style': 'form', 'explode': False }})
    user_fields: Optional[List[shared.UserFieldsParameterEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'user.fields', 'style': 'form', 'explode': False }})
    

@dataclass
class FindTweetByIDRequest:
    path_params: FindTweetByIDPathParams = field(default=None)
    query_params: FindTweetByIDQueryParams = field(default=None)
    

@dataclass
class FindTweetByIDResponse:
    content_type: str = field(default=None)
    error: Optional[Any] = field(default=None)
    problem: Optional[Any] = field(default=None)
    single_tweet_lookup_response: Optional[shared.SingleTweetLookupResponse] = field(default=None)
    status_code: int = field(default=None)
    
