from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum


@dataclass
class GetUsersIdsBadgesPathParams:
    ids: str = field(metadata={'path_param': { 'field_name': 'ids', 'style': 'simple', 'explode': False }})
    
class GetUsersIdsBadgesOrderEnum(str, Enum):
    DESC = "desc"
    ASC = "asc"

class GetUsersIdsBadgesSortEnum(str, Enum):
    RANK = "rank"
    NAME = "name"
    TYPE = "type"
    AWARDED = "awarded"


@dataclass
class GetUsersIdsBadgesQueryParams:
    site: str = field(metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    fromdate: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'fromdate', 'style': 'form', 'explode': True }})
    max: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': True }})
    min: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'min', 'style': 'form', 'explode': True }})
    order: Optional[GetUsersIdsBadgesOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    sort: Optional[GetUsersIdsBadgesSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    todate: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsersIdsBadgesRequest:
    path_params: GetUsersIdsBadgesPathParams = field()
    query_params: GetUsersIdsBadgesQueryParams = field()
    

@dataclass
class GetUsersIdsBadgesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
