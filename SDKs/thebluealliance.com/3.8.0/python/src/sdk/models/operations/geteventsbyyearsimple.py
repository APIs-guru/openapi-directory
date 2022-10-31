from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEventsByYearSimplePathParams:
    year: int = field(default=None, metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventsByYearSimpleHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventsByYearSimpleSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetEventsByYearSimpleRequest:
    path_params: GetEventsByYearSimplePathParams = field(default=None)
    headers: GetEventsByYearSimpleHeaders = field(default=None)
    security: GetEventsByYearSimpleSecurity = field(default=None)
    

@dataclass
class GetEventsByYearSimpleResponse:
    content_type: str = field(default=None)
    event_simples: Optional[List[shared.EventSimple]] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
