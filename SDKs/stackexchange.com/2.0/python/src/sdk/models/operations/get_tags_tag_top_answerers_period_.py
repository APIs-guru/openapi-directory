from dataclasses import dataclass, field
from typing import Enum,Optional

class GetTagsTagTopAnswerersPeriodPeriodEnum(str, Enum):
    ALL_TIME = "all_time"
    MONTH = "month"


@dataclass
class GetTagsTagTopAnswerersPeriodPathParams:
    period: GetTagsTagTopAnswerersPeriodPeriodEnum = field(default=None, metadata={'path_param': { 'field_name': 'period', 'style': 'simple', 'explode': False }})
    tag: str = field(default=None, metadata={'path_param': { 'field_name': 'tag', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagsTagTopAnswerersPeriodQueryParams:
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    site: str = field(default=None, metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTagsTagTopAnswerersPeriodRequest:
    path_params: GetTagsTagTopAnswerersPeriodPathParams = field(default=None)
    query_params: GetTagsTagTopAnswerersPeriodQueryParams = field(default=None)
    

@dataclass
class GetTagsTagTopAnswerersPeriodResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
