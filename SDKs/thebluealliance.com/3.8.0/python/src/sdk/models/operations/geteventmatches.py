from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEventMatchesPathParams:
    event_key: str = field(default=None, metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventMatchesHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    

@dataclass
class GetEventMatchesSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetEventMatchesRequest:
    path_params: GetEventMatchesPathParams = field(default=None)
    headers: GetEventMatchesHeaders = field(default=None)
    security: GetEventMatchesSecurity = field(default=None)
    

@dataclass
class GetEventMatchesResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    matches: Optional[List[shared.Match]] = field(default=None)
    status_code: int = field(default=None)
    
