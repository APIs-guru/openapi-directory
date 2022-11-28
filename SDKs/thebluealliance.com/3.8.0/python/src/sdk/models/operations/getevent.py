from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEventPathParams:
    event_key: str = field(metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetEventRequest:
    headers: GetEventHeaders = field()
    path_params: GetEventPathParams = field()
    security: GetEventSecurity = field()
    

@dataclass
class GetEventResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    event: Optional[shared.Event] = field(default=None)
    
