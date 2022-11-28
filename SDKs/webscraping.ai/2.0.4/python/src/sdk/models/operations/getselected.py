from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetSelectedQueryParams:
    url: str = field(metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    headers: Optional[dict[str, str]] = field(default=None, metadata={'query_param': { 'field_name': 'headers', 'style': 'form', 'explode': True }})
    js: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'js', 'style': 'form', 'explode': True }})
    proxy: Optional[shared.ProxyEnum] = field(default=None, metadata={'query_param': { 'field_name': 'proxy', 'style': 'form', 'explode': True }})
    selector: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'selector', 'style': 'form', 'explode': True }})
    timeout: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'timeout', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSelectedRequest:
    query_params: GetSelectedQueryParams = field()
    

@dataclass
class GetSelectedResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    page_error: Optional[shared.PageError] = field(default=None)
    get_selected_200_text_html_string: Optional[str] = field(default=None)
    
