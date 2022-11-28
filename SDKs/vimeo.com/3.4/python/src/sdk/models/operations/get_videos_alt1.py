from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class GetVideosAlt1DirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetVideosAlt1FilterEnum(str, Enum):
    APP_ONLY = "app_only"
    EMBEDDABLE = "embeddable"
    FEATURED = "featured"
    PLAYABLE = "playable"

class GetVideosAlt1SortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    COMMENTS = "comments"
    DATE = "date"
    DEFAULT = "default"
    DURATION = "duration"
    LAST_USER_ACTION_EVENT_DATE = "last_user_action_event_date"
    LIKES = "likes"
    MODIFIED_TIME = "modified_time"
    PLAYS = "plays"


@dataclass
class GetVideosAlt1QueryParams:
    containing_uri: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'containing_uri', 'style': 'form', 'explode': True }})
    direction: Optional[GetVideosAlt1DirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetVideosAlt1FilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    filter_embeddable: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'filter_embeddable', 'style': 'form', 'explode': True }})
    filter_playable: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'filter_playable', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetVideosAlt1SortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVideosAlt1Request:
    query_params: GetVideosAlt1QueryParams = field()
    

@dataclass
class GetVideosAlt1Response:
    content_type: str = field()
    status_code: int = field()
    videos: Optional[List[shared.Video]] = field(default=None)
    
