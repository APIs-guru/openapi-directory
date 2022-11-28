from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEventsByYearSimplePathParams:
    year: int = field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventsByYearSimpleHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventsByYearSimpleSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetEventsByYearSimpleRequest:
    headers: GetEventsByYearSimpleHeaders = field()
    path_params: GetEventsByYearSimplePathParams = field()
    security: GetEventsByYearSimpleSecurity = field()
    

@dataclass
class GetEventsByYearSimpleResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    event_simples: Optional[List[shared.EventSimple]] = field(default=None)
    
