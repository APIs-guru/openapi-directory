from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetAppearancesPathParams:
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class GetAppearancesDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetAppearancesFilterEnum(str, Enum):
    EMBEDDABLE = "embeddable"

class GetAppearancesSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    COMMENTS = "comments"
    DATE = "date"
    DURATION = "duration"
    LIKES = "likes"
    PLAYS = "plays"


@dataclass
class GetAppearancesQueryParams:
    direction: Optional[GetAppearancesDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetAppearancesFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    filter_embeddable: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'filter_embeddable', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetAppearancesSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAppearancesRequest:
    path_params: GetAppearancesPathParams = field(default=None)
    query_params: GetAppearancesQueryParams = field(default=None)
    

@dataclass
class GetAppearancesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    videos: Optional[List[shared.Video]] = field(default=None)
    
