from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class GetUserFollowsPeopleEmbedEnum(str, Enum):
    PERSON = "person"


@dataclass
class GetUserFollowsPeopleQueryParams:
    embed: Optional[GetUserFollowsPeopleEmbedEnum] = field(default=None, metadata={'query_param': { 'field_name': 'embed', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserFollowsPeopleRequest:
    query_params: GetUserFollowsPeopleQueryParams = field()
    

@dataclass
class GetUserFollowsPeopleResponse:
    content_type: str = field()
    status_code: int = field()
    person_follows: Optional[List[shared.PersonFollow]] = field(default=None)
    
