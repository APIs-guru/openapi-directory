from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetVodSeasonVideosPathParams:
    ondemand_id: float = field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    season_id: float = field(metadata={'path_param': { 'field_name': 'season_id', 'style': 'simple', 'explode': False }})
    
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
    path_params: GetVodSeasonVideosPathParams = field()
    query_params: GetVodSeasonVideosQueryParams = field()
    

@dataclass
class GetVodSeasonVideosResponse:
    content_type: str = field()
    status_code: int = field()
    videos: Optional[List[shared.Video]] = field(default=None)
    
