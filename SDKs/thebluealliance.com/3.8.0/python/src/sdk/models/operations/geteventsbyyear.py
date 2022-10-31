from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEventsByYearPathParams:
    year: int = field(default=None, metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventsByYearHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventsByYearSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetEventsByYearRequest:
    path_params: GetEventsByYearPathParams = field(default=None)
    headers: GetEventsByYearHeaders = field(default=None)
    security: GetEventsByYearSecurity = field(default=None)
    

@dataclass
class GetEventsByYearResponse:
    content_type: str = field(default=None)
    events: Optional[List[shared.Event]] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
