from dataclasses import dataclass, field
from typing import Enum,Optional

class GetTagsTagTopAskersPeriodPeriodEnum(str, Enum):
    ALL_TIME = "all_time"
    MONTH = "month"


@dataclass
class GetTagsTagTopAskersPeriodPathParams:
    period: GetTagsTagTopAskersPeriodPeriodEnum = field(default=None, metadata={'path_param': { 'field_name': 'period', 'style': 'simple', 'explode': False }})
    tag: str = field(default=None, metadata={'path_param': { 'field_name': 'tag', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagsTagTopAskersPeriodQueryParams:
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    site: str = field(default=None, metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTagsTagTopAskersPeriodRequest:
    path_params: GetTagsTagTopAskersPeriodPathParams = field(default=None)
    query_params: GetTagsTagTopAskersPeriodQueryParams = field(default=None)
    

@dataclass
class GetTagsTagTopAskersPeriodResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
