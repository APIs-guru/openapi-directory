from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetPostClientJavascriptQueryParams:
    access_token: str = field(metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    group_ids: str = field(metadata={'query_param': { 'field_name': 'group_ids', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPostClientJavascriptRequest:
    query_params: GetPostClientJavascriptQueryParams = field()
    

@dataclass
class GetPostClientJavascriptResponse:
    content_type: str = field()
    status_code: int = field()
    
