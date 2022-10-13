from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class FindUsersByIDQueryParams:
    expansions: Optional[List[shared.UserExpansionsParameterEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'expansions', 'style': 'form', 'explode': False }})
    ids: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': False }})
    media_fields: Optional[List[shared.MediaFieldsParameterEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'media.fields', 'style': 'form', 'explode': False }})
    place_fields: Optional[List[shared.PlaceFieldsParameterEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'place.fields', 'style': 'form', 'explode': False }})
    poll_fields: Optional[List[shared.PollFieldsParameterEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'poll.fields', 'style': 'form', 'explode': False }})
    tweet_fields: Optional[List[shared.TweetFieldsParameterEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'tweet.fields', 'style': 'form', 'explode': False }})
    user_fields: Optional[List[shared.UserFieldsParameterEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'user.fields', 'style': 'form', 'explode': False }})
    

@dataclass
class FindUsersByIDRequest:
    query_params: FindUsersByIDQueryParams = field(default=None)
    

@dataclass
class FindUsersByIDResponse:
    content_type: str = field(default=None)
    error: Optional[Any] = field(default=None)
    problem: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    user_lookup_response: Optional[shared.UserLookupResponse] = field(default=None)
    
