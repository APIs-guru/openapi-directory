from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetSearchAdvancedAcceptedEnum(str, Enum):
    TRUE = "true"
    FALSE = "false"

class GetSearchAdvancedClosedEnum(str, Enum):
    TRUE = "true"
    FALSE = "false"

class GetSearchAdvancedMigratedEnum(str, Enum):
    TRUE = "true"
    FALSE = "false"

class GetSearchAdvancedNoticeEnum(str, Enum):
    TRUE = "true"
    FALSE = "false"

class GetSearchAdvancedOrderEnum(str, Enum):
    DESC = "desc"
    ASC = "asc"

class GetSearchAdvancedSortEnum(str, Enum):
    ACTIVITY = "activity"
    CREATION = "creation"
    VOTES = "votes"
    RELEVANCE = "relevance"

class GetSearchAdvancedWikiEnum(str, Enum):
    TRUE = "true"
    FALSE = "false"


@dataclass
class GetSearchAdvancedQueryParams:
    site: str = field(metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    accepted: Optional[GetSearchAdvancedAcceptedEnum] = field(default=None, metadata={'query_param': { 'field_name': 'accepted', 'style': 'form', 'explode': True }})
    answers: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'answers', 'style': 'form', 'explode': True }})
    body: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'body', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    closed: Optional[GetSearchAdvancedClosedEnum] = field(default=None, metadata={'query_param': { 'field_name': 'closed', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    fromdate: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'fromdate', 'style': 'form', 'explode': True }})
    max: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': True }})
    migrated: Optional[GetSearchAdvancedMigratedEnum] = field(default=None, metadata={'query_param': { 'field_name': 'migrated', 'style': 'form', 'explode': True }})
    min: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'min', 'style': 'form', 'explode': True }})
    notice: Optional[GetSearchAdvancedNoticeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'notice', 'style': 'form', 'explode': True }})
    nottagged: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nottagged', 'style': 'form', 'explode': True }})
    order: Optional[GetSearchAdvancedOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    sort: Optional[GetSearchAdvancedSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    tagged: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tagged', 'style': 'form', 'explode': True }})
    title: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'title', 'style': 'form', 'explode': True }})
    todate: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    user: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'user', 'style': 'form', 'explode': True }})
    views: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'views', 'style': 'form', 'explode': True }})
    wiki: Optional[GetSearchAdvancedWikiEnum] = field(default=None, metadata={'query_param': { 'field_name': 'wiki', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSearchAdvancedRequest:
    query_params: GetSearchAdvancedQueryParams = field()
    

@dataclass
class GetSearchAdvancedResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
