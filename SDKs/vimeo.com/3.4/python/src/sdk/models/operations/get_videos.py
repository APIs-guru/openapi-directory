from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetVideosPathParams:
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class GetVideosDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetVideosFilterEnum(str, Enum):
    APP_ONLY = "app_only"
    EMBEDDABLE = "embeddable"
    FEATURED = "featured"
    PLAYABLE = "playable"

class GetVideosSortEnum(str, Enum):
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
class GetVideosQueryParams:
    containing_uri: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'containing_uri', 'style': 'form', 'explode': True }})
    direction: Optional[GetVideosDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetVideosFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    filter_embeddable: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'filter_embeddable', 'style': 'form', 'explode': True }})
    filter_playable: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'filter_playable', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetVideosSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVideosRequest:
    path_params: GetVideosPathParams = field(default=None)
    query_params: GetVideosQueryParams = field(default=None)
    

@dataclass
class GetVideosResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    videos: Optional[List[shared.Video]] = field(default=None)
    
