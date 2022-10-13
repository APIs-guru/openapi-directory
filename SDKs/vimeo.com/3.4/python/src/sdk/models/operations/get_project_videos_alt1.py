from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetProjectVideosAlt1PathParams:
    project_id: float = field(default=None, metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    
class GetProjectVideosAlt1DirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetProjectVideosAlt1SortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"
    DEFAULT = "default"
    DURATION = "duration"
    LAST_USER_ACTION_EVENT_DATE = "last_user_action_event_date"


@dataclass
class GetProjectVideosAlt1QueryParams:
    direction: Optional[GetProjectVideosAlt1DirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetProjectVideosAlt1SortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProjectVideosAlt1Security:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetProjectVideosAlt1Request:
    path_params: GetProjectVideosAlt1PathParams = field(default=None)
    query_params: GetProjectVideosAlt1QueryParams = field(default=None)
    security: GetProjectVideosAlt1Security = field(default=None)
    

@dataclass
class GetProjectVideosAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    videos: Optional[List[shared.Video]] = field(default=None)
    
