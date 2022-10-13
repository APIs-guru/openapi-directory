from dataclasses import dataclass, field
from typing import Enum,Optional

class GetQueryExtensionExtensionEnum(str, Enum):
    ATOM = "atom"
    RSS = "rss"
    HTML = "html"
    JSON = "json"


@dataclass
class GetQueryExtensionPathParams:
    extension: GetQueryExtensionExtensionEnum = field(default=None, metadata={'path_param': { 'field_name': 'extension', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetQueryExtensionQueryParams:
    count: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    in_url_prefixes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'inUrlPrefixes', 'style': 'form', 'explode': True }})
    q: str = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    start: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    subdomains: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'subdomains', 'style': 'form', 'explode': True }})
    

@dataclass
class GetQueryExtensionRequest:
    path_params: GetQueryExtensionPathParams = field(default=None)
    query_params: GetQueryExtensionQueryParams = field(default=None)
    

@dataclass
class GetQueryExtensionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
