from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class GetProjectsAlt1DirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetProjectsAlt1SortEnum(str, Enum):
    DATE = "date"
    DEFAULT = "default"
    MODIFIED_TIME = "modified_time"
    NAME = "name"


@dataclass
class GetProjectsAlt1QueryParams:
    direction: Optional[GetProjectsAlt1DirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetProjectsAlt1SortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProjectsAlt1Security:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetProjectsAlt1Request:
    query_params: GetProjectsAlt1QueryParams = field()
    security: GetProjectsAlt1Security = field()
    

@dataclass
class GetProjectsAlt1Response:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    projects: Optional[List[shared.Project]] = field(default=None)
    
