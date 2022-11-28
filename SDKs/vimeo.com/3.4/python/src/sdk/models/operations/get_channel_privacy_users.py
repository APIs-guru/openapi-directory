from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetChannelPrivacyUsersPathParams:
    channel_id: float = field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    
class GetChannelPrivacyUsersDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclass
class GetChannelPrivacyUsersQueryParams:
    direction: Optional[GetChannelPrivacyUsersDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetChannelPrivacyUsersRequest:
    path_params: GetChannelPrivacyUsersPathParams = field()
    query_params: GetChannelPrivacyUsersQueryParams = field()
    

@dataclass
class GetChannelPrivacyUsersResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    users: Optional[List[shared.User]] = field(default=None)
    
