from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetCategoryChannelsPathParams:
    category: str = field(default=None, metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    
class GetCategoryChannelsDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetCategoryChannelsSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"
    FOLLOWERS = "followers"
    VIDEOS = "videos"


@dataclass
class GetCategoryChannelsQueryParams:
    direction: Optional[GetCategoryChannelsDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetCategoryChannelsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCategoryChannelsRequest:
    path_params: GetCategoryChannelsPathParams = field(default=None)
    query_params: GetCategoryChannelsQueryParams = field(default=None)
    

@dataclass
class GetCategoryChannelsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    channels: Optional[List[shared.Channel]] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
