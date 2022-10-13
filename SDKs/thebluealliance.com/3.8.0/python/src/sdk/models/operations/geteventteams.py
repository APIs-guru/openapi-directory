from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEventTeamsPathParams:
    event_key: str = field(default=None, metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventTeamsHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    

@dataclass
class GetEventTeamsSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetEventTeamsRequest:
    path_params: GetEventTeamsPathParams = field(default=None)
    headers: GetEventTeamsHeaders = field(default=None)
    security: GetEventTeamsSecurity = field(default=None)
    

@dataclass
class GetEventTeamsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    teams: Optional[List[shared.Team]] = field(default=None)
    
