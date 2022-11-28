from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetGroupMembersPathParams:
    group_id: float = field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    
class GetGroupMembersDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetGroupMembersFilterEnum(str, Enum):
    MODERATORS = "moderators"

class GetGroupMembersSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"


@dataclass
class GetGroupMembersQueryParams:
    direction: Optional[GetGroupMembersDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetGroupMembersFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetGroupMembersSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGroupMembersRequest:
    path_params: GetGroupMembersPathParams = field()
    query_params: GetGroupMembersQueryParams = field()
    

@dataclass
class GetGroupMembersResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    users: Optional[List[shared.User]] = field(default=None)
    
