from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class GetUserVodsAlt1DirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetUserVodsAlt1FilterEnum(str, Enum):
    FILM = "film"
    SERIES = "series"

class GetUserVodsAlt1SortEnum(str, Enum):
    ADDED = "added"
    ALPHABETICAL = "alphabetical"
    DATE = "date"
    MODIFIED_TIME = "modified_time"
    NAME = "name"
    PUBLISH_TIME = "publish.time"
    RATING = "rating"


@dataclass
class GetUserVodsAlt1QueryParams:
    direction: Optional[GetUserVodsAlt1DirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetUserVodsAlt1FilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetUserVodsAlt1SortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserVodsAlt1Request:
    query_params: GetUserVodsAlt1QueryParams = field(default=None)
    

@dataclass
class GetUserVodsAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    on_demand_pages: Optional[List[shared.OnDemandPage]] = field(default=None)
    
