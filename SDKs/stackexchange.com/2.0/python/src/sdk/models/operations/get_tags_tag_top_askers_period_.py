from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetTagsTagTopAskersPeriodPeriodEnum(str, Enum):
    ALL_TIME = "all_time"
    MONTH = "month"


@dataclass
class GetTagsTagTopAskersPeriodPathParams:
    period: GetTagsTagTopAskersPeriodPeriodEnum = field(metadata={'path_param': { 'field_name': 'period', 'style': 'simple', 'explode': False }})
    tag: str = field(metadata={'path_param': { 'field_name': 'tag', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagsTagTopAskersPeriodQueryParams:
    site: str = field(metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTagsTagTopAskersPeriodRequest:
    path_params: GetTagsTagTopAskersPeriodPathParams = field()
    query_params: GetTagsTagTopAskersPeriodQueryParams = field()
    

@dataclass
class GetTagsTagTopAskersPeriodResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
