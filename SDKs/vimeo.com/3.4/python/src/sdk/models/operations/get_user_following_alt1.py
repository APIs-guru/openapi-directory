from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class GetUserFollowingAlt1DirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetUserFollowingAlt1FilterEnum(str, Enum):
    ONLINE = "online"

class GetUserFollowingAlt1SortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"


@dataclass
class GetUserFollowingAlt1QueryParams:
    direction: Optional[GetUserFollowingAlt1DirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetUserFollowingAlt1FilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetUserFollowingAlt1SortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserFollowingAlt1Request:
    query_params: GetUserFollowingAlt1QueryParams = field()
    

@dataclass
class GetUserFollowingAlt1Response:
    content_type: str = field()
    status_code: int = field()
    users: Optional[List[shared.User]] = field(default=None)
    
