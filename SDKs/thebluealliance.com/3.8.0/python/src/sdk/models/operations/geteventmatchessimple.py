from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEventMatchesSimplePathParams:
    event_key: str = field(metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventMatchesSimpleHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventMatchesSimpleSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetEventMatchesSimpleRequest:
    headers: GetEventMatchesSimpleHeaders = field()
    path_params: GetEventMatchesSimplePathParams = field()
    security: GetEventMatchesSimpleSecurity = field()
    

@dataclass
class GetEventMatchesSimpleResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    match_simples: Optional[List[shared.MatchSimple]] = field(default=None)
    
