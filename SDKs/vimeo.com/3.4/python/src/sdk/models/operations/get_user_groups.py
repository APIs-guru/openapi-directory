from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetUserGroupsPathParams:
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class GetUserGroupsDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetUserGroupsFilterEnum(str, Enum):
    MODERATED = "moderated"

class GetUserGroupsSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"
    MEMBERS = "members"
    VIDEOS = "videos"


@dataclass
class GetUserGroupsQueryParams:
    direction: Optional[GetUserGroupsDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetUserGroupsFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetUserGroupsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserGroupsRequest:
    path_params: GetUserGroupsPathParams = field(default=None)
    query_params: GetUserGroupsQueryParams = field(default=None)
    

@dataclass
class GetUserGroupsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    groups: Optional[List[shared.Group]] = field(default=None)
    
