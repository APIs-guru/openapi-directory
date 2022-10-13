from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutUserFollowsPeoplePersonIDPathParams:
    person_id: int = field(default=None, metadata={'path_param': { 'field_name': 'person_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutUserFollowsPeoplePersonIDRequest:
    path_params: PutUserFollowsPeoplePersonIDPathParams = field(default=None)
    

@dataclass
class PutUserFollowsPeoplePersonIDResponse:
    content_type: str = field(default=None)
    person_follow: Optional[shared.PersonFollow] = field(default=None)
    status_code: int = field(default=None)
    
