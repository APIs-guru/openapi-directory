from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class SearchUsersDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class SearchUsersSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"
    FOLLOWERS = "followers"
    RELEVANT = "relevant"
    VIDEOS = "videos"


@dataclass
class SearchUsersQueryParams:
    direction: Optional[SearchUsersDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[SearchUsersSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchUsersRequest:
    query_params: SearchUsersQueryParams = field(default=None)
    

@dataclass
class SearchUsersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    users: Optional[List[shared.User]] = field(default=None)
    
