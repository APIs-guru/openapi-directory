from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetSelectedMultipleQueryParams:
    headers: Optional[dict[str, str]] = field(default=None, metadata={'query_param': { 'field_name': 'headers', 'style': 'form', 'explode': True }})
    js: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'js', 'style': 'form', 'explode': True }})
    proxy: Optional[shared.ProxyEnum] = field(default=None, metadata={'query_param': { 'field_name': 'proxy', 'style': 'form', 'explode': True }})
    selectors: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'selectors', 'style': 'form', 'explode': True }})
    timeout: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'timeout', 'style': 'form', 'explode': True }})
    url: str = field(default=None, metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSelectedMultipleRequest:
    query_params: GetSelectedMultipleQueryParams = field(default=None)
    

@dataclass
class GetSelectedMultipleResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    page_error: Optional[shared.PageError] = field(default=None)
    selected_areas: Optional[List[str]] = field(default=None)
    status_code: int = field(default=None)
    
