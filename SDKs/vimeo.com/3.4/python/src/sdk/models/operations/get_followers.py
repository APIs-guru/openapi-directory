from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetFollowersPathParams:
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class GetFollowersDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetFollowersSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"


@dataclass
class GetFollowersQueryParams:
    direction: Optional[GetFollowersDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetFollowersSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFollowersRequest:
    path_params: GetFollowersPathParams = field()
    query_params: GetFollowersQueryParams = field()
    

@dataclass
class GetFollowersResponse:
    content_type: str = field()
    status_code: int = field()
    users: Optional[List[shared.User]] = field(default=None)
    
