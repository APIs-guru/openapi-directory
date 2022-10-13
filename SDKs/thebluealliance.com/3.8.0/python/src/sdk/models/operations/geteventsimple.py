from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEventSimplePathParams:
    event_key: str = field(default=None, metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventSimpleHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    

@dataclass
class GetEventSimpleSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetEventSimpleRequest:
    path_params: GetEventSimplePathParams = field(default=None)
    headers: GetEventSimpleHeaders = field(default=None)
    security: GetEventSimpleSecurity = field(default=None)
    

@dataclass
class GetEventSimpleResponse:
    content_type: str = field(default=None)
    event_simple: Optional[shared.EventSimple] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
