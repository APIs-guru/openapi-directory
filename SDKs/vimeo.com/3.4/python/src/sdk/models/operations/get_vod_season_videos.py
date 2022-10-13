from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetVodSeasonVideosPathParams:
    ondemand_id: float = field(default=None, metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    season_id: float = field(default=None, metadata={'path_param': { 'field_name': 'season_id', 'style': 'simple', 'explode': False }})
    
class GetVodSeasonVideosFilterEnum(str, Enum):
    VIEWABLE = "viewable"

class GetVodSeasonVideosSortEnum(str, Enum):
    DATE = "date"
    DEFAULT = "default"
    MANUAL = "manual"
    NAME = "name"
    PURCHASE_TIME = "purchase_time"
    RELEASE_DATE = "release_date"


@dataclass
class GetVodSeasonVideosQueryParams:
    filter: Optional[GetVodSeasonVideosFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetVodSeasonVideosSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVodSeasonVideosRequest:
    path_params: GetVodSeasonVideosPathParams = field(default=None)
    query_params: GetVodSeasonVideosQueryParams = field(default=None)
    

@dataclass
class GetVodSeasonVideosResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    videos: Optional[List[shared.Video]] = field(default=None)
    
