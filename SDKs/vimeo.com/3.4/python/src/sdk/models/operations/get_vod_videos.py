from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetVodVideosPathParams:
    ondemand_id: float = field(default=None, metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    
class GetVodVideosDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetVodVideosFilterEnum(str, Enum):
    ALL = "all"
    BUY = "buy"
    EXPIRING_SOON = "expiring_soon"
    EXTRA = "extra"
    MAIN = "main"
    MAIN_VIEWABLE = "main.viewable"
    RENT = "rent"
    TRAILER = "trailer"
    UNWATCHED = "unwatched"
    VIEWABLE = "viewable"
    WATCHED = "watched"

class GetVodVideosSortEnum(str, Enum):
    DATE = "date"
    DEFAULT = "default"
    EPISODE = "episode"
    MANUAL = "manual"
    NAME = "name"
    PURCHASE_TIME = "purchase_time"
    RELEASE_DATE = "release_date"


@dataclass
class GetVodVideosQueryParams:
    direction: Optional[GetVodVideosDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetVodVideosFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetVodVideosSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVodVideosRequest:
    path_params: GetVodVideosPathParams = field(default=None)
    query_params: GetVodVideosQueryParams = field(default=None)
    

@dataclass
class GetVodVideosResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    videos: Optional[List[shared.Video]] = field(default=None)
    
