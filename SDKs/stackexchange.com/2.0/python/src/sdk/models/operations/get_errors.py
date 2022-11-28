from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetErrorsQueryParams:
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    

@dataclass
class GetErrorsRequest:
    query_params: GetErrorsQueryParams = field()
    

@dataclass
class GetErrorsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
