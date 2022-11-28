from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class GetUserGroupsAlt1DirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetUserGroupsAlt1FilterEnum(str, Enum):
    MODERATED = "moderated"

class GetUserGroupsAlt1SortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"
    MEMBERS = "members"
    VIDEOS = "videos"


@dataclass
class GetUserGroupsAlt1QueryParams:
    direction: Optional[GetUserGroupsAlt1DirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetUserGroupsAlt1FilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetUserGroupsAlt1SortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserGroupsAlt1Request:
    query_params: GetUserGroupsAlt1QueryParams = field()
    

@dataclass
class GetUserGroupsAlt1Response:
    content_type: str = field()
    status_code: int = field()
    groups: Optional[List[shared.Group]] = field(default=None)
    
