from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class GetGroupsDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetGroupsFilterEnum(str, Enum):
    FEATURED = "featured"

class GetGroupsSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"
    FOLLOWERS = "followers"
    RELEVANT = "relevant"
    VIDEOS = "videos"


@dataclass
class GetGroupsQueryParams:
    direction: Optional[GetGroupsDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetGroupsFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetGroupsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGroupsRequest:
    query_params: GetGroupsQueryParams = field()
    

@dataclass
class GetGroupsResponse:
    content_type: str = field()
    status_code: int = field()
    groups: Optional[List[shared.Group]] = field(default=None)
    
