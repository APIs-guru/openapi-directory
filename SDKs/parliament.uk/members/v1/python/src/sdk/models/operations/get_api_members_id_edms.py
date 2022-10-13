from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIMembersIDEdmsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIMembersIDEdmsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIMembersIDEdmsRequest:
    path_params: GetAPIMembersIDEdmsPathParams = field(default=None)
    query_params: GetAPIMembersIDEdmsQueryParams = field(default=None)
    

@dataclass
class GetAPIMembersIDEdmsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    early_day_motion_members_service_search_result: Optional[shared.EarlyDayMotionMembersServiceSearchResult] = field(default=None)
    status_code: int = field(default=None)
    
