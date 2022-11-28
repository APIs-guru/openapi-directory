from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetHTMLQueryParams:
    url: str = field(metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    headers: Optional[dict[str, str]] = field(default=None, metadata={'query_param': { 'field_name': 'headers', 'style': 'form', 'explode': True }})
    js: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'js', 'style': 'form', 'explode': True }})
    proxy: Optional[shared.ProxyEnum] = field(default=None, metadata={'query_param': { 'field_name': 'proxy', 'style': 'form', 'explode': True }})
    timeout: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'timeout', 'style': 'form', 'explode': True }})
    

@dataclass
class GetHTMLRequest:
    query_params: GetHTMLQueryParams = field()
    

@dataclass
class GetHTMLResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    page_error: Optional[shared.PageError] = field(default=None)
    get_html_200_text_html_string: Optional[str] = field(default=None)
    
