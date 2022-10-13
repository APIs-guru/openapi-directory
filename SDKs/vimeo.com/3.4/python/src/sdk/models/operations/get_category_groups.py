from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetCategoryGroupsPathParams:
    category: str = field(default=None, metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    
class GetCategoryGroupsDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetCategoryGroupsSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"
    MEMBERS = "members"
    VIDEOS = "videos"


@dataclass
class GetCategoryGroupsQueryParams:
    direction: Optional[GetCategoryGroupsDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetCategoryGroupsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCategoryGroupsRequest:
    path_params: GetCategoryGroupsPathParams = field(default=None)
    query_params: GetCategoryGroupsQueryParams = field(default=None)
    

@dataclass
class GetCategoryGroupsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    groups: Optional[List[shared.Group]] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
