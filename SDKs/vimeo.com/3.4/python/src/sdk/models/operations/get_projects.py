from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetProjectsPathParams:
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
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
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetProjectsRequest:
    path_params: GetProjectsPathParams = field()
    query_params: GetProjectsQueryParams = field()
    security: GetProjectsSecurity = field()
    

@dataclass
class GetProjectsResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    projects: Optional[List[shared.Project]] = field(default=None)
    
