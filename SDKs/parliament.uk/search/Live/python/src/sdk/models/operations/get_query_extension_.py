from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetQueryExtensionExtensionEnum(str, Enum):
    ATOM = "atom"
    RSS = "rss"
    HTML = "html"
    JSON = "json"


@dataclass
class GetQueryExtensionPathParams:
    extension: GetQueryExtensionExtensionEnum = field(metadata={'path_param': { 'field_name': 'extension', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetQueryExtensionQueryParams:
    q: str = field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    count: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    in_url_prefixes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'inUrlPrefixes', 'style': 'form', 'explode': True }})
    start: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    subdomains: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'subdomains', 'style': 'form', 'explode': True }})
    

@dataclass
class GetQueryExtensionRequest:
    path_params: GetQueryExtensionPathParams = field()
    query_params: GetQueryExtensionQueryParams = field()
    

@dataclass
class GetQueryExtensionResponse:
    content_type: str = field()
    status_code: int = field()
    
