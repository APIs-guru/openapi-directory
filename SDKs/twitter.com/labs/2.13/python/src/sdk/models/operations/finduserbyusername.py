from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class FindUserByUsernamePathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class FindUserByUsernameQueryParams:
    expansions: Optional[List[shared.UserExpansionsParameterEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'expansions', 'style': 'form', 'explode': False }})
    media_fields: Optional[List[shared.MediaFieldsParameterEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'media.fields', 'style': 'form', 'explode': False }})
    place_fields: Optional[List[shared.PlaceFieldsParameterEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'place.fields', 'style': 'form', 'explode': False }})
    poll_fields: Optional[List[shared.PollFieldsParameterEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'poll.fields', 'style': 'form', 'explode': False }})
    tweet_fields: Optional[List[shared.TweetFieldsParameterEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'tweet.fields', 'style': 'form', 'explode': False }})
    user_fields: Optional[List[shared.UserFieldsParameterEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'user.fields', 'style': 'form', 'explode': False }})
    

@dataclass
class FindUserByUsernameRequest:
    path_params: FindUserByUsernamePathParams = field()
    query_params: FindUserByUsernameQueryParams = field()
    

@dataclass
class FindUserByUsernameResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[Any] = field(default=None)
    problem: Optional[Any] = field(default=None)
    single_user_lookup_response: Optional[shared.SingleUserLookupResponse] = field(default=None)
    
