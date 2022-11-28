from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUserFollowsPeoplePersonIDPathParams:
    person_id: int = field(metadata={'path_param': { 'field_name': 'person_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserFollowsPeoplePersonIDRequest:
    path_params: GetUserFollowsPeoplePersonIDPathParams = field()
    

@dataclass
class GetUserFollowsPeoplePersonIDResponse:
    content_type: str = field()
    status_code: int = field()
    person_follow: Optional[shared.PersonFollow] = field(default=None)
    
