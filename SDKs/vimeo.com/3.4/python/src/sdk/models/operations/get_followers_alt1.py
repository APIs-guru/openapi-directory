from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class GetFollowersAlt1DirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetFollowersAlt1SortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"


@dataclass
class GetFollowersAlt1QueryParams:
    direction: Optional[GetFollowersAlt1DirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetFollowersAlt1SortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFollowersAlt1Request:
    query_params: GetFollowersAlt1QueryParams = field(default=None)
    

@dataclass
class GetFollowersAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    users: Optional[List[shared.User]] = field(default=None)
    
