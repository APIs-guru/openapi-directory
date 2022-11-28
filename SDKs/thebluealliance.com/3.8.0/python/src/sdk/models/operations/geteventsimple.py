from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEventSimplePathParams:
    event_key: str = field(metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventSimpleHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventSimpleSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetEventSimpleRequest:
    headers: GetEventSimpleHeaders = field()
    path_params: GetEventSimplePathParams = field()
    security: GetEventSimpleSecurity = field()
    

@dataclass
class GetEventSimpleResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    event_simple: Optional[shared.EventSimple] = field(default=None)
    
