from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetChannelModeratorsPathParams:
    channel_id: float = field(default=None, metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    
class GetChannelModeratorsDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetChannelModeratorsSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"


@dataclass
class GetChannelModeratorsQueryParams:
    direction: Optional[GetChannelModeratorsDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetChannelModeratorsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetChannelModeratorsRequest:
    path_params: GetChannelModeratorsPathParams = field(default=None)
    query_params: GetChannelModeratorsQueryParams = field(default=None)
    

@dataclass
class GetChannelModeratorsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    users: Optional[List[shared.User]] = field(default=None)
    
