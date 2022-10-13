from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetGenreVodsPathParams:
    genre_id: str = field(default=None, metadata={'path_param': { 'field_name': 'genre_id', 'style': 'simple', 'explode': False }})
    
class GetGenreVodsDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetGenreVodsFilterEnum(str, Enum):
    COUNTRY = "country"
    MY_REGION = "my_region"

class GetGenreVodsSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"
    NAME = "name"
    PUBLISH_TIME = "publish.time"
    VIDEOS = "videos"


@dataclass
class GetGenreVodsQueryParams:
    direction: Optional[GetGenreVodsDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetGenreVodsFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetGenreVodsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGenreVodsRequest:
    path_params: GetGenreVodsPathParams = field(default=None)
    query_params: GetGenreVodsQueryParams = field(default=None)
    

@dataclass
class GetGenreVodsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    on_demand_pages: Optional[List[shared.OnDemandPage]] = field(default=None)
    
