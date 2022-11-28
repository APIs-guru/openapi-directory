from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetTagsTagTopAnswerersPeriodPeriodEnum(str, Enum):
    ALL_TIME = "all_time"
    MONTH = "month"


@dataclass
class GetTagsTagTopAnswerersPeriodPathParams:
    period: GetTagsTagTopAnswerersPeriodPeriodEnum = field(metadata={'path_param': { 'field_name': 'period', 'style': 'simple', 'explode': False }})
    tag: str = field(metadata={'path_param': { 'field_name': 'tag', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagsTagTopAnswerersPeriodQueryParams:
    site: str = field(metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTagsTagTopAnswerersPeriodRequest:
    path_params: GetTagsTagTopAnswerersPeriodPathParams = field()
    query_params: GetTagsTagTopAnswerersPeriodQueryParams = field()
    

@dataclass
class GetTagsTagTopAnswerersPeriodResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
