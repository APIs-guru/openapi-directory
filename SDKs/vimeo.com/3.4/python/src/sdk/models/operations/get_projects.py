from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetProjectsPathParams:
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class GetProjectsDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetProjectsSortEnum(str, Enum):
    DATE = "date"
    DEFAULT = "default"
    MODIFIED_TIME = "modified_time"
    NAME = "name"


@dataclass
class GetProjectsQueryParams:
    direction: Optional[GetProjectsDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetProjectsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProjectsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetProjectsRequest:
    path_params: GetProjectsPathParams = field(default=None)
    query_params: GetProjectsQueryParams = field(default=None)
    security: GetProjectsSecurity = field(default=None)
    

@dataclass
class GetProjectsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    projects: Optional[List[shared.Project]] = field(default=None)
    
