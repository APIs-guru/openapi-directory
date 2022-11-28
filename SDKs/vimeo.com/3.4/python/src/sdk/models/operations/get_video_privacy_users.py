from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetVideoPrivacyUsersPathParams:
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideoPrivacyUsersQueryParams:
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVideoPrivacyUsersRequest:
    path_params: GetVideoPrivacyUsersPathParams = field()
    query_params: GetVideoPrivacyUsersQueryParams = field()
    

@dataclass
class GetVideoPrivacyUsersResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    users: Optional[List[shared.User]] = field(default=None)
    
