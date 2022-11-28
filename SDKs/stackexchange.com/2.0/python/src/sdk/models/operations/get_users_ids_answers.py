from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum


@dataclass
class GetUsersIdsAnswersPathParams:
    ids: str = field(metadata={'path_param': { 'field_name': 'ids', 'style': 'simple', 'explode': False }})
    
class GetUsersIdsAnswersOrderEnum(str, Enum):
    DESC = "desc"
    ASC = "asc"

class GetUsersIdsAnswersSortEnum(str, Enum):
    ACTIVITY = "activity"
    CREATION = "creation"
    VOTES = "votes"


@dataclass
class GetUsersIdsAnswersQueryParams:
    site: str = field(metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    fromdate: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'fromdate', 'style': 'form', 'explode': True }})
    max: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': True }})
    min: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'min', 'style': 'form', 'explode': True }})
    order: Optional[GetUsersIdsAnswersOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    sort: Optional[GetUsersIdsAnswersSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    todate: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsersIdsAnswersRequest:
    path_params: GetUsersIdsAnswersPathParams = field()
    query_params: GetUsersIdsAnswersQueryParams = field()
    

@dataclass
class GetUsersIdsAnswersResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
