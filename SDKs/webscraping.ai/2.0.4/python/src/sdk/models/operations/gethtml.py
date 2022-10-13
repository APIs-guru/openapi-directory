from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class GetHTMLQueryParams:
    headers: Optional[dict[str, str]] = field(default=None, metadata={'query_param': { 'field_name': 'headers', 'style': 'form', 'explode': True }})
    js: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'js', 'style': 'form', 'explode': True }})
    proxy: Optional[shared.ProxyEnum] = field(default=None, metadata={'query_param': { 'field_name': 'proxy', 'style': 'form', 'explode': True }})
    timeout: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'timeout', 'style': 'form', 'explode': True }})
    url: str = field(default=None, metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    

@dataclass
class GetHTMLRequest:
    query_params: GetHTMLQueryParams = field(default=None)
    

@dataclass
class GetHTMLResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    page_error: Optional[shared.PageError] = field(default=None)
    status_code: int = field(default=None)
    
