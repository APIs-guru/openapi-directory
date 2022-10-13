from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class GetChannelSubscriptionsAlt1DirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetChannelSubscriptionsAlt1FilterEnum(str, Enum):
    MODERATED = "moderated"

class GetChannelSubscriptionsAlt1SortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"
    FOLLOWERS = "followers"
    VIDEOS = "videos"


@dataclass
class GetChannelSubscriptionsAlt1QueryParams:
    direction: Optional[GetChannelSubscriptionsAlt1DirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetChannelSubscriptionsAlt1FilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetChannelSubscriptionsAlt1SortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetChannelSubscriptionsAlt1Request:
    query_params: GetChannelSubscriptionsAlt1QueryParams = field(default=None)
    

@dataclass
class GetChannelSubscriptionsAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    channels: Optional[List[shared.Channel]] = field(default=None)
    
