from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetUserVodsPathParams:
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class GetUserVodsDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetUserVodsFilterEnum(str, Enum):
    FILM = "film"
    SERIES = "series"

class GetUserVodsSortEnum(str, Enum):
    ADDED = "added"
    ALPHABETICAL = "alphabetical"
    DATE = "date"
    MODIFIED_TIME = "modified_time"
    NAME = "name"
    PUBLISH_TIME = "publish.time"
    RATING = "rating"


@dataclass
class GetUserVodsQueryParams:
    direction: Optional[GetUserVodsDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetUserVodsFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetUserVodsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserVodsRequest:
    path_params: GetUserVodsPathParams = field(default=None)
    query_params: GetUserVodsQueryParams = field(default=None)
    

@dataclass
class GetUserVodsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    on_demand_pages: Optional[List[shared.OnDemandPage]] = field(default=None)
    
