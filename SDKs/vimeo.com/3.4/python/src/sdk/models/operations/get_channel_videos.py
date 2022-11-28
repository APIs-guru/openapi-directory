from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetChannelVideosPathParams:
    channel_id: float = field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    
class GetChannelVideosDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetChannelVideosFilterEnum(str, Enum):
    EMBEDDABLE = "embeddable"

class GetChannelVideosSortEnum(str, Enum):
    ADDED = "added"
    ALPHABETICAL = "alphabetical"
    COMMENTS = "comments"
    DATE = "date"
    DEFAULT = "default"
    DURATION = "duration"
    LIKES = "likes"
    MANUAL = "manual"
    MODIFIED_TIME = "modified_time"
    PLAYS = "plays"


@dataclass
class GetChannelVideosQueryParams:
    containing_uri: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'containing_uri', 'style': 'form', 'explode': True }})
    direction: Optional[GetChannelVideosDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetChannelVideosFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    filter_embeddable: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'filter_embeddable', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetChannelVideosSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetChannelVideosRequest:
    path_params: GetChannelVideosPathParams = field()
    query_params: GetChannelVideosQueryParams = field()
    

@dataclass
class GetChannelVideosResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    videos: Optional[List[shared.Video]] = field(default=None)
    
