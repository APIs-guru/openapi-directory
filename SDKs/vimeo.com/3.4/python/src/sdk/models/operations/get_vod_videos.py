from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetVodVideosPathParams:
    ondemand_id: float = field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    
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
    path_params: GetVodVideosPathParams = field()
    query_params: GetVodVideosQueryParams = field()
    

@dataclass
class GetVodVideosResponse:
    content_type: str = field()
    status_code: int = field()
    videos: Optional[List[shared.Video]] = field(default=None)
    
