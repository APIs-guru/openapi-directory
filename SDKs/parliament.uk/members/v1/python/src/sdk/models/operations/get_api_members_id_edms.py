from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIMembersIDEdmsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIMembersIDEdmsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIMembersIDEdmsRequest:
    path_params: GetAPIMembersIDEdmsPathParams = field()
    query_params: GetAPIMembersIDEdmsQueryParams = field()
    

@dataclass
class GetAPIMembersIDEdmsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    early_day_motion_members_service_search_result: Optional[shared.EarlyDayMotionMembersServiceSearchResult] = field(default=None)
    
